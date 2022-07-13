import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import './map.styles.scss';

const Map = ({ geolocation, tourName }) => {
  const { lat, lng } = geolocation;
  return (
    <div className="map">
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>{tourName} Start Point</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
