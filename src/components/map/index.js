import { React, useEffect, useRef } from "react";

const GoogleMap = (props) => {
  const center = props.center;
  const zoom = props.zoom;
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, { center, zoom });
  });

  return (
    <div>
      <div ref={ref} id="map">
        {center}
      </div>
    </div>
  );
};

export default GoogleMap;
