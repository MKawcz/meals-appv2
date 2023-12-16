import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';

const MealDetails = () => {
    const [mealDetails, setMealDetails] = useState({});
    const [rating, setRating] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => {
                setMealDetails(data.meals[0]);
            })
            .catch(error => {
                console.error('Error fetching data ', error);
            });
    }, [id]);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const ingredients = [];
    for(let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];

        if(ingredient && measure) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }

    return (
        <div>
            <h2>{mealDetails.strMeal}</h2>
            <StarRating onRating={handleRating} />
            <p>Kategoria: {mealDetails.strCategory}</p>
            <p>Kraj pochodzenia: {mealDetails.strArea}</p>
            <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal}/>
            <p>Instrukcja:  {mealDetails.strInstructions}</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default MealDetails;