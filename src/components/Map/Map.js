import "./Map.css";
export const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        
        <iframe
          title="map"
          width={370}
          height={350}
          frameBorder={0}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Gran%20Via%20de%20les%20Corts%20Catalanes,%20672&t=&z=15&ie=UTF8&iwloc=&output=embed"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};
