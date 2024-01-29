import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
    const position = [-26.146230, 28.044050]; // Replace with building's address coordinates

    return (
        <MapContainer center={position} zoom={14} style={{ width: '100%', height: '400px' }} dragging={false} // Disable map dragging
                      zoomControl={false} // Disable zoom control
                      doubleClickZoom={false} // Disable double click to zoom
                      scrollWheelZoom={false} // Disable scroll wheel zoom
                      touchZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} radius={10}>
                <Popup>PL Steel HQ</Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapComponent;