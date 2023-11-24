import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ParkingDetails = ({ parkingSpots }) => {
    return (
        <ListGroup variant="flush">
            {parkingSpots.map(spot => (
                <ListGroup.Item key={spot.id} className="parking-spot">
                    <div className="parking-spot-details">
                        {spot.name} - {spot.distance} - ${spot.price}
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default ParkingDetails;
