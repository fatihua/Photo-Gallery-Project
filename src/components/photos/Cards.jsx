import React from "react";

const Cards = ({photographer, src}) => {
  console.log(photographer);

  return (
    <div className="container">
      <div className="image">
        <img className="img" src={src.large} alt="" />
      </div> 

      <div className="names">
        <p>{photographer}</p>
      </div>   
    </div>
    
  );
};

export default Cards;
