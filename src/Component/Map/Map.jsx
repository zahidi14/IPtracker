import React, { useEffect, useState } from "react";
import "./map.scss";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = ({ cordinate }) => {
  console.log("kordinat", cordinate);
  const [position, setPosition] = useState(cordinate);
  // useEffect(() => {
  //   if (cordinate && cordinate.latlng) {
  //     setPosition(cordinate.latlng); // update via props
  //   }
  // }, [cordinate]);
  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }
  return (
    <div className="map-container">
      <MapContainer center={cordinate} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coords={cordinate} />
        <Marker position={cordinate}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
