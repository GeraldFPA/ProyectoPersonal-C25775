import { useEffect, useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import StageCard from "./components/StageCard";

import "./App.css";

function App() {

  const [stages, setStages] = useState([]);
  const [activeStage, setActiveStage] = useState(null);

  useEffect(() => {
    fetch("/data/stages.json")
      .then(response => response.json())
      .then(data => {
        setStages(data);
        setActiveStage(data[0]);
      });
  }, []);

  return (
    <div className="app">

      <Header />

      <Timeline
        stages={stages}
        activeStage={activeStage}
        setActiveStage={setActiveStage}
      />

      {activeStage && (
        <StageCard stage={activeStage} />
      )}

    </div>
  );
}

export default App;