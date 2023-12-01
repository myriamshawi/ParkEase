import React from 'react';

const SearchBar = ({ onSearch }) => {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="map-search">
            <select onChange={handleChange} defaultValue="">
                <option value="">Select a location</option> {/* Default option */}
                <option value="position1">Concordia</option>
                <option value="home">Home</option>
            </select>
        </div>
    );
};

export default SearchBar;
