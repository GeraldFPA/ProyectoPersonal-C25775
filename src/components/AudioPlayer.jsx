function AudioPlayer({ audio }) {

    return (
      <audio controls>
        <source
          src={audio}
          type="audio/mpeg"
        />
      </audio>
    );
  }
  
  export default AudioPlayer;