import React, { useRef, useEffect } from 'react';

const SearchBar = ({ meals, setMeals }) => {
    const searchInputRef = useRef(null);

    const updateSearchedResults = () => {
        let results = meals;

        if(searchInputRef.current) {
            const searchTerm = searchInputRef.current.value.toLowerCase();
            results = results.filter((meal) => meal.strMeal.toLowerCase().includes(searchTerm));
        }

        setMeals(results);
    }

    useEffect(() => {
        updateSearchedResults();
    }, [meals]);

    return (
            <label>
                Szukaj:
                <input type="text" ref={searchInputRef} onChange={updateSearchedResults} />
            </label>
    );
};

export default SearchBar;