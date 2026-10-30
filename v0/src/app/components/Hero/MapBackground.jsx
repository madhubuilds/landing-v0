import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Tooltip,
} from "react-leaflet";
import "./MapBackground.css";
const places = [
  {
    name: "HITEC City",
    position: [17.4435, 78.3772],
    category: "Explore the neighbourhood",
    color: "#0D9488",
  },
  {
    name: "Jubilee Hills",
    position: [17.431, 78.407],
    category: "Cafes and hangouts",
    color: "#7C3AED",
  },
  {
    name: "Hussain Sagar",
    position: [17.4239, 78.4738],
    category: "Places to explore",
    color: "#EAB308",
  },
  {
    name: "Charminar",
    position: [17.3616, 78.4747],
    category: "Local discoveries",
    color: "#EA580C",
  },
  {
    name: "Uppal",
    position: [17.401, 78.559],
    category: "Explore nearby",
    color: "#2563EB",
  },
];

export default function MapBackground() {
  return (
    <div className="hero-map h-full w-full">
      <MapContainer
        center={[17.385, 78.4867]}
        zoom={11}
        minZoom={9}
        maxZoom={18}
        scrollWheelZoom={false}
        zoomControl={true}
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a>'
        />

        {places.map((place) => (
          <CircleMarker
            key={place.name}
            center={place.position}
            radius={8}
            pathOptions={{
              color: "#000",
              weight: 3,
              fillColor: place.color,
              fillOpacity: 1,
            }}
          >
            <Tooltip direction="top">
              <strong>{place.name}</strong>
            </Tooltip>

            <Popup>
              <strong>{place.name}</strong>
              <p>{place.category}</p>
              <small>Illustrative preview, not a live listing.</small>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
