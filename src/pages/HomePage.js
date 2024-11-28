import React from "react";
import GameCard from "../components/GameCard";

const games = [
  { title: "Game 1", description: "A fun game!", image: "/game1.jpg" },
  { title: "Game 2", description: "An exciting game!", image: "/game2.jpg" },
];

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
