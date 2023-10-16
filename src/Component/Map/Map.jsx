import React, { useEffect, useState } from "react";
import "./map.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ cordinate }) => {
  console.log("kordinat", cordinate);
  return (
    <div className="map-container">
      <MapContainer center={cordinate} zoom={3} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
