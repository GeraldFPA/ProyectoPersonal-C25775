import StageIcon from "./StageIcon";

function TimelineNode({ stage, isActive, onSelect }) {
  return (
    <button
      className={`node ${isActive ? "node--active" : ""}`}
      style={{ "--stage-accent": stage.accent }}
      type="button"
      aria-pressed={isActive}
      onClick={onSelect}
    >
      <span className="node__number">{String(stage.id).padStart(2, "0")}</span>
      <StageIcon name={stage.icon} className="node__icon" decorative />
      <span className="node__label">{stage.shortTitle}</span>
    </button>
  );
}

export default TimelineNode;
