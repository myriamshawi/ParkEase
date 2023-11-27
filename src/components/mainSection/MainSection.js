import React from 'react';
import MapArea from './MapArea';
import '../../Styles/MainSection.css';
import SearchBar from "./SearchBar";
import ParkingDetails from "./ParkingDetails";
import {Card} from "react-bootstrap";

// This is where you'd retrieve parking spots data, perhaps from API or state
const parkingSpots = [
    // ...array of parking spot objects
];

const MainSection = () => {
    return (
        <div className="main-section">
            <Card className="welcome-card">
                <Card.Body>
                    <h1 className="welcome-message">Welcome to ParkEase</h1>
                    <p>Find and reserve your parking spot with ease.</p>
                    <SearchBar />
                </Card.Body>
            </Card>
            <ParkingDetails parkingSpots={parkingSpots} />
            <MapArea />
        </div>
    );
};

export default MainSection;
