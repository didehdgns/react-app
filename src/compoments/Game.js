import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../Game.css";

function Game({ year, title, etitle, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/game/${etitle}`,
        state: {
          year,
          title,
          etitle,
          summary,
          poster,
          genres,
        },
      }}
    >
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
          <p className="game__summary">{summary.slice(0, 120)}...</p>
        </div>
      </div>
    </Link>
  );
}

Game.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  etitle: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Game;