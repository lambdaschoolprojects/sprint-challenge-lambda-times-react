import React from "react";
import PropTypes from "prop-types";

const Card = ({ card: { headline, author, img } }) => {
  return (
    <div className="card">
      <div className="headline">{headline /* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img
            src={img /* image source goes here */}
            alt="stop linting error"
          />
        </div>
        <span>By {author /* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;

Card.propTypes = {
  headline: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string
};
