import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Stars = ({rating}) => {
  // Calculate the number of full stars and half stars to display
  const fullStars = Math.floor(rating);
  const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  

  // Generate an array of stars
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push('full');
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push('half');
  }

  return (
    <div className="rating">
      {stars.map((type, index) => {
        if (type === 'full') {
          return <FontAwesomeIcon key={index} icon={faStar} />;
        } else if (type === 'half') {
          return <FontAwesomeIcon key={index} icon={faStarHalfAlt} />;
        } 
      })}
    </div>
  );
};
export default Stars