import Header from "../../components/Header";
import logements from '../../data/logements.json';
import Slideshow from '../../components/Slideshow';
import Property from '../../components/Property';
import PropertyInfo from '../../components/PropertyInfo';
import Host from '../../components/Host';
import Ratings from '../../components/Rating';
import Footer from "../../components/Footer";
import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from "react";

function PropertyDetails() {
  useEffect(() => {
    document.title = "Location | Kasa";
  }, []);

  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    return <Navigate to="/error" />; 
  }

   
  return (
    <>
      <Header />
      <div className="property-detail">
        <Slideshow images={logement.pictures} />
        <div className="property-main-info">
          <div className="logement-info">
            <Property title={logement.title} location={logement.location} tags={logement.tags} />
          </div>
          <div className="logement-host">
            <Host host={logement.host} />
            <div className="logement-rating">
              <Ratings rating={logement.rating} />
            </div>
          </div> 
        </div>
        <PropertyInfo description={logement.description} equipments={logement.equipments} />
      </div>
      <Footer />
    </>
  )
};

export default PropertyDetails;
