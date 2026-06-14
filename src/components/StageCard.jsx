import AudioPlayer from "./AudioPlayer";

function StageCard({ stage }) {

  return (
    <section className="stage-card">

      <h2>{stage.title}</h2>

      <img
        src={stage.image}
        alt={stage.title}
      />

      <p>{stage.description}</p>

      <AudioPlayer
        audio={stage.audio}
      />

    </section>
  );
}

export default StageCard;