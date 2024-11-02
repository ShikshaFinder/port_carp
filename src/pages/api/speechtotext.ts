import {
  SpeechConfig,
  AudioConfig,
  SpeechRecognizer,
} from "microsoft-cognitiveservices-speech-sdk";

export default async function handler(req: { method: string; body: { audioData: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { text?: any; error?: string; message?: string; }): void; new(): any; }; }; }) {
  if (req.method === "POST") {
    try {
      const { audioData } = req.body;

      // Ensure that the audio data is received and correctly formatted
      if (!audioData || !Array.isArray(audioData)) {
        throw new Error("Invalid audio data");
      }

      // Set up Azure Speech credentials from environment variables
      const subscriptionKey = process.env.AZURE_SPEECH_KEY;
      const region = process.env.AZURE_SPEECH_REGION;
      const endpoint = process.env.AZURE_SPEECH_ENDPOINT;

      if (!subscriptionKey || !region) {
        throw new Error("Azure Speech Key and Region must be defined");
      }

      // Initialize Speech Config
      const speechConfig = SpeechConfig.fromSubscription(
        subscriptionKey,
        region
      );
      if (endpoint) {
        speechConfig.endpointId = endpoint; // Set the endpoint ID if needed
      }

      // Convert the received array back into a Uint8Array
      const audioBuffer = Uint8Array.from(audioData);

      // Create an AudioConfig object from the buffer
      const audioConfig = AudioConfig.fromWavFileInput(
        Buffer.from(audioBuffer)
      );
      const recognizer = new SpeechRecognizer(speechConfig, audioConfig);

      // Recognize speech asynchronously
      const result = await new Promise((resolve, reject) => {
        recognizer.recognizeOnceAsync(
          (recognitionResult) => resolve(recognitionResult as any),
          (error) => reject(error)
        );
      });

      // Check the result of the recognition
      if (result && (result as any).reason === 0) {
        // Success
        res.status(200).json({ text: result });
      } else {
        res
          .status(500)
          .json({ error: "Speech recognition failed: " + result });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          error: "Error processing the audio: " + (error as Error).message,
        });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
