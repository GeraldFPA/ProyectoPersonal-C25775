function TimelineNode({
    stage,
    activeStage,
    setActiveStage
  }) {
  
    const active =
      activeStage?.id === stage.id;
  
    return (
      <button
        className={`node ${active ? "active" : ""}`}
        onClick={() => setActiveStage(stage)}
      >
        {stage.title}
      </button>
    );
  }
  
  export default TimelineNode;