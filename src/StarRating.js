import React, { useState } from 'react';

const StarRating = ( { maxStars = 5, onRating} ) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div>
            {[...Array(maxStars)].map((star, index) => {
                const ratingValue = index + 1;

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