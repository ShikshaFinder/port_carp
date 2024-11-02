import { useState } from "react";

export default function UploadAudio() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please select an audio file to upload.");
      return;
    }

    setIsLoading(true);
    setError("");
    setTranscription("");

    try {
      const fileArrayBuffer = await selectedFile.arrayBuffer();
      const audioData = Array.from(new Uint8Array(fileArrayBuffer));

      const response = await fetch("/api/speechtotext", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ audioData }),
      });

      const data = await response.json();

      if (response.ok) {
        setTranscription(data.text);
      } else {
        setError(
          data.error || "An error occurred while transcribing the audio."
        );
      }
    } catch (err) {
      setError("An error occurred while uploading the audio file.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Upload Audio for Speech-to-Text</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" accept="audio/*" onChange={handleFileChange} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "Upload and Transcribe"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {transcription && (
        <div>
          <h2>Transcription</h2>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
}
