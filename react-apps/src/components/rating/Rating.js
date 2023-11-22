import React, {useState} from 'react';
import './rating.css';

export default function Rating(){
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return(
        <div className="rating-container">
            <h3>Rating:</h3>
            {[...Array(5)]. map((star, index) => {
                index +=1;
                return(
                    <button className={`rating-button ${index <= (hover || rating) ? 'on' : 'off'} `} 
                    onClick={() => {
                        setRating(index)
                    }}
                    onMouseEnter={() => {
                        setHover(index)
                    }}
                     onMouseLeave={() => {
                        setHover(rating)
                     }}>
                        {index}
                    </button>
                )
            })}
        </div>
    )
}