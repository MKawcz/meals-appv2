import React, { useState } from 'react';

const StarRating = ( { maxStars = 5, onRating} ) => {
    //Deklaruje dwa stany za pomocą useState. rating przechowuje aktualną ocenę,
    // a hover przechowuje wartość gwiazdki, na którą użytkownik najechał myszką.
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div>
            {/*Rozpoczyna renderowanie komponentu. Używa map na tablicy o długości maxStars,
            aby wygenerować gwiazdki. [...Array(maxStars)] tworzy nową tablicę o długości maxStars
            i wypełnia ją pustymi miejscami, które są mapowane na gwiazdki.*/}
            {[...Array(maxStars)].map((star, index) => {
                // Dla każdej gwiazdki oblicza jej wartość jako index + 1
                const ratingValue = index + 1;

                // Dla każdej gwiazdki renderuje ukryty element input typu radio.
                // Przy kliknięciu ustawia wartość rating na ratingValue tej gwiazdki
                // i wywołuje funkcję onRating z tą wartością.
                //Dla każdej gwiazdki renderuje element span, który reprezentuje gwiazdkę wizualnie.
                // Używa zdarzeń onMouseEnter i onMouseLeave do ustawiania stanu hover.
                // Kolor gwiazdki zależy od tego, czy jej wartość jest mniejsza lub równa hover lub rating.
                // Jeśli tak, gwiazdka jest żółta (co oznacza zaznaczenie), w przeciwnym razie szara.
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => {
                                setRating(ratingValue);
                                onRating(ratingValue);
                            }}
                            style={{ display: 'none' }}
                        />
                        <span
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(rating)}
                            style={{ cursor: 'pointer', color: ratingValue <= (hover || rating) ? 'yellow' : 'gray' }}
                        >&#9733;</span>
                    </label>
                );
            })}
        </div>
    );
}
export default StarRating;