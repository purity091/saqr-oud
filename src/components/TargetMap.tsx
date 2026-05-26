import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issue in React-Leaflet
// @ts-ignore
import icon from 'leaflet/dist/images/marker-icon.png';
// @ts-ignore
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface TargetMapProps {
  center?: [number, number];
  zoom?: number;
  targets?: {
    name: string;
    coords: [number, number];
    radius: number;
    color: string;
  }[];
  markerTitle?: string;
  markerDesc?: string;
}

const MapInvalidator = () => {
  const map = useMap();
  React.useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 250);
  }, [map]);
  return null;
};

const ChangeView = ({ center, zoom }: { center: any; zoom: number }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const TargetMap: React.FC<TargetMapProps> = ({ 
  center = [35.122, 36.764], // Sabouniya, Hama
  zoom = 15,
  targets = [
    {
      name: "منطقة الصابونية (الاستهداف المباشر)",
      coords: [35.122, 36.764],
      radius: 800,
      color: "#0071E3"
    },
    {
      name: "مناطق المحيط (توسع)",
      coords: [35.122, 36.764],
      radius: 2000,
      color: "#A855F7"
    }
  ],
  markerTitle = "موقع المتجر في الصابونية",
  markerDesc = "نقطة الانطلاق لخدمة المنطقة والمحيط."
}) => {
  return (
    <div className="target-map-wrapper" style={{ minHeight: '450px' }}>
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={false}
        className="target-leaflet-map"
        style={{ height: '450px', width: '100%', borderRadius: '1.5rem' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Force map to resize after initial render */}
        <MapInvalidator />
        
        {/* Watch and update view when props change dynamically */}
        <ChangeView center={center} zoom={zoom} />
        
        {targets.map((target, idx) => (
          <React.Fragment key={idx}>
            <Circle 
              center={target.coords} 
              radius={target.radius}
              pathOptions={{ 
                fillColor: target.color, 
                color: target.color,
                fillOpacity: 0.15,
                weight: 2
              }}
            />
          </React.Fragment>
        ))}

        <Marker position={center}>
          <Popup>
            <div className="text-right" style={{ direction: 'rtl' }}>
              <strong className="text-blue-600 block mb-1">{markerTitle}</strong>
              <p className="text-sm text-gray-600">{markerDesc}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default TargetMap;
