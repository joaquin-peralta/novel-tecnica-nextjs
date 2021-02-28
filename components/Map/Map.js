import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const Map = () => {
  const position = [-31.44769311670469, -60.928885331144265];

  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} draggable>
        <Popup>
          <strong>Novel Técnica</strong>
          <br />
          Lun a Vie 9 a 17 hs
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
