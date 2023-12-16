import React from 'react';

const CountryFilter = ({ onCountryChange }) => {
    const countries = ['Canadian', 'American', 'Italian', 'Japanese'];

    return (
        <select onChange={(e) => onCountryChange(e.target.value)}>
            <option value="">Wybierz kraj</option>
            {countries.map(country => (
                <option key={country} value={country}>{country}</option>
            ))}
        </select>
    );
};

export default CountryFilter;