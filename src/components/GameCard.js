import React from "react";

const GameCard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 text-gray-200 rounded overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default GameCard;
