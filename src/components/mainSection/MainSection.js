import React, { useState } from 'react';
import MapArea from './MapArea';
import '../../Styles/MainSection.css';
import SearchBar from "./SearchBar";
import ParkingDetails from "./ParkingDetails";
import { Card } from "react-bootstrap";
import PaymentInterface from "../sideBar/PaymentInterface";

const MainSection = ({ onSelectSpot }) => {
    // Positions
    const positionDefault = [45.5017, -73.5673];
    const positionConcordia = [45.4972, -73.5794];
    const positionHome = [45.5149, -73.6852];

    // Parking Spots Data
    const parkingSpotsDefault = [
        // Array of default parking spot objects
    ];
    const parkingSpotsConcordia = [
        { id: 1, name: "Concordia Lot A", coordinates: [45.4978, -73.5789], distance: '0.2 km', price: '$2.50/hr' },
        { id: 2, name: "Library Parking", coordinates: [45.4970, -73.5785], distance: '0.1 km', price: '$3.00/hr' },
        { id: 3, name: "Guy Street Garage", coordinates: [45.4965, -73.5800], distance: '0.3 km', price: '$2.00/hr' },
        { id: 4, name: "Downtown Underground", coordinates: [45.4960, -73.5770], distance: '0.4 km', price: '$2.75/hr' }
    ];

    const parkingSpotsHome = [
        { id: 5, name: "Vertu Center Parking", coordinates: [45.5160, -73.6830], distance: '0.5 km', price: '$1.50/hr' },
        { id: 6, name: "Saint-Laurent Parking Lot", coordinates: [45.5145, -73.6810], distance: '0.6 km', price: '$1.00/hr' },
        { id: 7, name: "Cavendish Mall Parking", coordinates: [45.5140, -73.6890], distance: '2.0 km', price: 'Free' },
        { id: 8, name: "Bois-Franc Station Parking", coordinates: [45.5190, -73.6855], distance: '1.5 km', price: '$1.75/hr' }
    ];

    // State
    const [mapPosition, setMapPosition] = useState(positionDefault);
    const [zoomLevel, setZoomLevel] = useState(13);
    const [parkingSpots, setParkingSpots] = useState(parkingSpotsDefault);
    const [selectedSpot, setSelectedSpot] = useState(null);



    // Handle search input
    const handleSearch = (searchTerm) => {
        switch (searchTerm.toLowerCase()) {
            case 'position1':
                setMapPosition(positionConcordia);
                setZoomLevel(15);
                setParkingSpots(parkingSpotsConcordia);
                break;
            case 'home':
                setMapPosition(positionHome);
                setZoomLevel(15);
                setParkingSpots(parkingSpotsHome);
                break;
            default:
                setMapPosition(positionDefault);
                setZoomLevel(13);
                setParkingSpots(parkingSpotsDefault);
                break;
        }
    };

    // Function to handle selecting a parking spot
    const handleSelectSpot = (spotId) => {
        const spot = [...parkingSpotsConcordia, ...parkingSpotsHome].find(spot => spot.id === spotId);
        setSelectedSpot(spot);
        onSelectSpot(spot);
    };

    return (
        <div className="main-section">
            <Card className="welcome-card">
                <Card.Body>
                    <div className="welcome-and-search">
                        <h1 className="welcome-message">Welcome to ParkEase</h1>
                        <p>Find and reserve your parking spot with ease.</p>
                        <SearchBar onSearch={handleSearch} />
                    </div>
                    <div className={"available-spots"}>
                        <ParkingDetails parkingSpots={parkingSpots} onSelectSpot={handleSelectSpot} />
                    </div>
                </Card.Body>
            </Card>
            <MapArea position={mapPosition} zoom={zoomLevel} />
        </div>
    );
};

export default MainSection;
