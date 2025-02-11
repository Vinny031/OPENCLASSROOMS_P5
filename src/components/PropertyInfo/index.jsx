import Collapse from '../../components/Collapse';

const PropertyInfo = ({ description, equipments }) => {
  return (
    <div className="description-equipments">
      <div className="property-description">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>
      </div>
      <div className="property-equipments">
        <Collapse title="Équipements">
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default PropertyInfo;