import AudioPlayer from "./AudioPlayer";
import StageIcon from "./StageIcon";
import cadImage from "../assets/img/cad.svg";
import finalImage from "../assets/img/final.svg";
import ideaImage from "../assets/img/idea.svg";
import postImage from "../assets/img/post.svg";
import printingImage from "../assets/img/printing.svg";
import slicerImage from "../assets/img/slicer.svg";

const stageImages = {
  cad: cadImage,
  final: finalImage,
  idea: ideaImage,
  post: postImage,
  printing: printingImage,
  slicer: slicerImage,
};

function StageCard({ stage }) {
  const image = stageImages[stage.imageKey];

  return (
    <section
      className="stage-card"
      style={{ "--stage-accent": stage.accent }}
      aria-labelledby="stage-title"
    >
      <div className="stage-card-header">
        <StageIcon name={stage.icon} className="stage-icon" />
        <div>
          <p className="stage-kicker">Etapa {stage.id}</p>
          <h2 id="stage-title">{stage.title}</h2>
          <p className="stage-card-subtitle">
            Recorrido de fabricación digital: de una idea a un objeto usable.
          </p>
        </div>
      </div>

      <div className="stage-content">
        <figure className="stage-card-figure">
          <img src={image} alt={`Ilustración de la etapa ${stage.title}`} />
          <figcaption>{stage.description}</figcaption>
        </figure>

        <div className="stage-info">
          <p className="stage-detail">{stage.detail}</p>

          <ul className="fact-list" aria-label="Datos clave de la etapa">
            {stage.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <AudioPlayer audio={stage.audio} label={stage.title} text={stage.narration} />
        </div>
      </div>
    </section>
  );
}

export default StageCard;
