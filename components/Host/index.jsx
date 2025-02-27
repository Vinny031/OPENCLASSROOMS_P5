const Host= ({ host }) => (
  <div className="host-info">
    <p className="host-name">{host.name}</p>
    <img src={host.picture} alt={host.name} className="host-image" />
    
  </div>
);

export default Host;