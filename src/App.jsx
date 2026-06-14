import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import StageCard from "./components/StageCard";
import Timeline from "./components/Timeline";

import "./App.css";

function App() {
  const [stages, setStages] = useState([]);
  const [activeStageId, setActiveStageId] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let ignore = false;

    async function loadStages() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/stages.json`);

        if (!response.ok) {
          throw new Error("No se pudo cargar el archivo JSON.");
        }

        const data = await response.json();

        if (!ignore) {
          setStages(data);
          setActiveStageId(data[0]?.id ?? null);
          setStatus("ready");
        }
      } catch (error) {
        if (!ignore) {
          console.error(error);
          setStatus("error");
        }
      }
    }

    loadStages();

    return () => {
      ignore = true;
    };
  }, []);

  const activeStage = useMemo(
    () => stages.find((stage) => stage.id === activeStageId) ?? stages[0],
    [activeStageId, stages],
  );

  return (
    <div className="app">
      <Header />

      <main className="journey" aria-live="polite">
        {status === "loading" && (
          <p className="status-message">Cargando recorrido de impresión 3D...</p>
        )}

        {status === "error" && (
          <p className="status-message status-message--error">
            No fue posible cargar los datos de la infografía.
          </p>
        )}

        {status === "ready" && (
          <>
            <Timeline
              stages={stages}
              activeStage={activeStage}
              onSelectStage={setActiveStageId}
            />

            {activeStage && <StageCard stage={activeStage} />}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
