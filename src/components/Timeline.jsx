import TimelineNode from "./TimelineNode";

function Timeline({ stages, activeStage, onSelectStage }) {
  return (
    <nav className="timeline" aria-label="Etapas del proceso de impresión 3D">
      {stages.map((stage) => (
        <TimelineNode
          key={stage.id}
          stage={stage}
          isActive={activeStage?.id === stage.id}
          onSelect={() => onSelectStage(stage.id)}
        />
      ))}
    </nav>
  );
}

export default Timeline;
