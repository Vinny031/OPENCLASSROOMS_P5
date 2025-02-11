const Property = ({ title, location, tags }) => (
    <div>
      <h1 className="property-title">{title}</h1>
      <p className="location">{location}</p>
      <div className="property-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
  
  export default Property;