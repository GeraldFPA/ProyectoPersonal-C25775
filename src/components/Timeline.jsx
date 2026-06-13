import TimelineNode from "./TimelineNode";

function Timeline({
  stages,
  activeStage,
  setActiveStage
}) {

  return (
    <section className="timeline">

      {stages.map(stage => (
        <TimelineNode
          key={stage.id}
          stage={stage}
          activeStage={activeStage}
          setActiveStage={setActiveStage}
        />
      ))}

    </section>
  );
}

export default Timeline;