import React from "react";
import PropTypes from "prop-types";

const Card = ({ headline, author, cardImage }) => {
  return (
    <div className="card">
      <div className="headline">{headline /* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={cardImage /* image source goes here */} />
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
  cardImage: PropTypes.string
};
