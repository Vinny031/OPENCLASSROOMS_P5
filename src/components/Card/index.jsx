import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../../components/Slideshow";

const Card = () => {
  const [logements, setLogements] = useState([]);
  const [selectedLogement, setSelectedLogement] = useState(null);

  useEffect(() => {
    let isMounted = true;
    import("../../data/logements.json")
      .then((data) => {
        if (isMounted) {
          setLogements(data.default);
        }
      })
      .catch((error) => console.error("Erreur de chargement des logements", error));

    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = (logement) => {
    setSelectedLogement(logement);
  };

  return (
    <div className="cards-container">
      {logements.map((logement) => (
        <div key={logement.id} className="card" onClick={() => handleClick(logement)}>
          <Link to={`/property/${logement.id}`}>
            <img src={logement.cover} alt="Aperçu de la location." className="card-image" />
            <h2 className="card-title">{logement.title}</h2>
          </Link>
        </div>
      ))}
      {selectedLogement && selectedLogement.images && <Slideshow images={selectedLogement.images} />}
    </div>
  );
};

export default Card;
