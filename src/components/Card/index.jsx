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
    <div>
      {logements.map((logement) => (
        <div key={logement.id} className="bg-white rounded-2xl shadow-lg p-4 max-w-xs">
          <img src={logement.cover} alt="Aperçu de la location." className="w-full h-40 object-cover rounded-lg" />
          <h2 className="text-xl font-bold mt-2">{logement.title}</h2>
        </div>
      ))}
    </div>
    );
  };

export default Card;