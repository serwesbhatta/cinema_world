import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://placehold.jp/400x400.png"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
