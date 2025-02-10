import { useEffect, useState } from "react";

const Card = () => {
  const [logements, setLogements] = useState([]);

  // Récupération des données du fichier JSON
  useEffect(() => {
    import("../../data/logements.json")
      .then((data) => setLogements(data.default))
      .catch((error) => console.error("Erreur de chargement des logements", error));
  }, []);

  return (
    <div className="cards-container">
      {logements.map((logement) => (
        <div key={logement.id} className="card">
          <img src={logement.cover} alt="Aperçu de la location." className="card-image" />
          <h2 className="card-title">{logement.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;