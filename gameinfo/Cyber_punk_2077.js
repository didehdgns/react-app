import React from "react";

function Cyber_punk_2077() {
  return (
    <div className="game">
      <img src={poster} alt={title} title={title} />
      <div className="game_data">
        <h3 className="game__title" style={{}}>
          {title}
        </h3>
        <h5 className="game__year">{year}</h5>
        <ul className="game__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="game__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}
export default Cyber_punk_2077;
