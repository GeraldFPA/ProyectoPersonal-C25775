import { useEffect, useState } from "react";

function App() {

  const [stages, setStages] = useState([]);

  useEffect(() => {
    fetch("/data/stages.json")
      .then(response => response.json())
      .then(data => setStages(data));
  }, []);

  return (
    <>
      <h1>Viaje de una Pieza Impresa en 3D</h1>

      {stages.map(stage => (
        <div key={stage.id}>
          {stage.title}
        </div>
      ))}
    </>
  );
}

export default App;