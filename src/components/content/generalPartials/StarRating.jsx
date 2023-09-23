import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>

      {/* Create an array of 5 stars using the spread operator and map over them */}
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1 // Calculate the rating value for each star (1 to 5)

        // Render each star with an input element and a FontAwesome star icon
        return (
          <label className='inline-flex'>
            <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />

            {/* Set the color of the star to yellow if it is being hovered over or if its rating value is less than or equal to the current rating */}
            <FaStar className="star" color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} size={50} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
          </label>
        )
      })}
    </div>
  )

}

export default StarRating