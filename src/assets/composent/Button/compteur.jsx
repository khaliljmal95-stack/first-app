
import { useState } from "react";
import Button from "./assets/composent/Button/compteur";
import "./App.css";

function App() {

  const [compteur, setCompteur] = useState(faulse);


  return (
    <div className="compteur">

      <h3>Compteur React</h3>

      <h2>{compteur}</h2>

      <button onClick={() => setCompteur(compteur + 1)}>
        
      </button>

    

    </div>
  );
}

export default App;
