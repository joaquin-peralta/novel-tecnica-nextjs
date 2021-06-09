import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const Map = () => {
  const position = new L.LatLng(-31.447930521044952, -60.92875309668356);
  const placeholder = L.icon({
    iconUrl: '/marker-icon.png',
    iconSize: [27, 40],
    iconAnchor: [27, 40],
  });

  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={placeholder}>
        <Popup>
          <strong>Novel Técnica</strong>
          <br />
          Lun a Vie 9 a 12 y 14 a 18 hs
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
