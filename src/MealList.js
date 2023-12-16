import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import CountryFilter from './CountryFilter';

const MealList = () => {
    const [originalMeals, setOriginalMeals] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeals('');
    }, []);

    const fetchMeals = (country) => {
        const countryQuery = country ? `filter.php?a=${country}` : 'search.php?s=';
        fetch(`https://www.themealdb.com/api/json/v1/1/${countryQuery}`)
            .then(response => response.json())
            .then(data => {
                setOriginalMeals(data.meals);
                setMeals(data.meals);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    };

    return (
        <div>
            <h2>Lista dań</h2>
            <div>
                <SearchBar meals={originalMeals} setMeals={setMeals}></SearchBar>
                <CountryFilter onCountryChange={fetchMeals} />
            </div>
            <ul>
                {meals && meals.map(meal => (
                    <li key={meal.idMeal}>
                        <Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MealList;