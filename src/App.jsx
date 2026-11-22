import { useState } from "react";
// Pas besoin d'importer le CSS ici si tu l'as mis dans App.css 
// (sinon importe "./App.css" ou "./Page2.css" selon où tu l'as mis)

import "./App.css";
export default function Page2() {
    const [showResult, setShowResult] = useState(false);
    const [resultat, setResultat] = useState(0);

    const calculerResultat = (operation) => {
        if (operation === "+") setResultat(resultat + 1);
        else if (operation === "-") setResultat(resultat - 1);
        else if (operation === "initialiser") setResultat(0);
    };

    const handleAfficher = () => setShowResult(!showResult);

    // Fonction pour déterminer la classe de couleur
    const getClasseResultat = () => {
        if (resultat > 0) return "resultat-valeur positif";
        if (resultat < 0) return "resultat-valeur negatif";
        return "resultat-valeur zero";
    };

    return (
        <div className="container-compteur">
            <button className="btn-toggle" onClick={handleAfficher}>
                {showResult ? "Hide resultat" : "Affiche resultat"}
            </button>

            {showResult && (
                <div className="resultat-card">
                    <h1 className="resultat-title">Résultat</h1>
                    
                    <h1 className={getClasseResultat()}>
                        {resultat}
                    </h1>

                    <div className="buttons-group">
                        <button 
                            className="btn-action btn-plus" 
                            onClick={() => calculerResultat("+")}
                        >
                            +
                        </button>
                        <button 
                            className="btn-action btn-minus" 
                            onClick={() => calculerResultat("-")}
                        >
                            −
                        </button>
                        <button 
                            className="btn-action btn-reset" 
                            onClick={() => calculerResultat("initialiser")}
                        >
                            Initialiser
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}