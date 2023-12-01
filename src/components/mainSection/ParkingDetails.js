import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ParkingDetails = ({ parkingSpots, onSelectSpot }) => {
    return (
        <div>
            {parkingSpots.map(spot => (
                <button key={spot.id} onClick={() => onSelectSpot(spot.id)}>
                    {spot.name} - {spot.distance} - {spot.price}
                </button>
            ))}
        </div>
    );
};
export default ParkingDetails;
