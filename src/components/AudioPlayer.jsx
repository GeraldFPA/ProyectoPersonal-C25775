import { useRef, useState } from "react";

function AudioPlayer({ audio, label, text }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playNarration() {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  }

  function stopNarration() {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  }

  return (
    <section className="audio-panel" aria-label={`Narración de ${label}`}>
      <div>
        <h3>Narración</h3>
        <p>{text}</p>
      </div>

      <audio
        ref={audioRef}
        src={audio}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      >
        Tu navegador no puede reproducir este audio.
      </audio>

      <div className="audio-actions">
        <button type="button" onClick={playNarration}>
          {isPlaying ? "Reiniciar audio" : "Escuchar audio"}
        </button>
        <button type="button" onClick={stopNarration} disabled={!isPlaying}>
          Detener
        </button>
      </div>
    </section>
  );
}

export default AudioPlayer;
