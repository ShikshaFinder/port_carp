import { useState, useRef } from "react";

export default function SpeechToText() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRecording = async () => {
    setIsRecording(true);
    setTranscript("");
    setError("");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const arrayBuffer = await audioBlob.arrayBuffer();

        // Convert arrayBuffer to Uint8Array
        const audioData = new Uint8Array(arrayBuffer);

        // Send the audio data to the backend API
        const response = await fetch("/api/speechtotext", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ audioData: Array.from(audioData) }), // Send Uint8Array as JSON array
        });

        const result = await response.json();

        if (response.ok) {
          setTranscript(result.text);
        } else {
          setError("Speech recognition failed. Please try again.");
        }
      };

      mediaRecorder.start();
    } catch (err) {
      console.error(err);
      setError("Error accessing the microphone");
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Speech to Text Converter</h1>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      {transcript && (
        <div style={{ marginTop: "20px" }}>
          <h3>Transcript:</h3>
          <p>{transcript}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
