import React from "react";
import PropTypes from "prop-types";
import "./Game.css";

function Game({
  customerid,
  name,
  job,
  taste,
  residence,
  visit,
  discovery,
  quest,
  reward,
}) {
  return (
    <div>
      <div>
        <div>
          <ul>
            <li>전략</li>
            <li>시뮬레이션</li>
            <li>롤플레잉</li>
          </ul>
        </div>
      </div>
      <div className="game">
        <div className="game_data">
          <h3 className="game__title" style={{}}>
            {name}
          </h3>
          <h5 className="game__year">{job}</h5>
          <ul className="game__genres">
            {taste.map((taste, index) => (
              <li key={index} className="genres__genre">
                {taste}
              </li>
            ))}
          </ul>
          <p className="game__summary">{residence}</p>
          <ul className="game__genres">
            {visit.map((visit, index2) => (
              <li key={index2} className="genres__genre">
                {visit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Game.propTypes = {
  customerid: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  taste: PropTypes.arrayOf(PropTypes.string).isRequired,
  residence: PropTypes.string.isRequired,
  visit: PropTypes.arrayOf(PropTypes.string).isRequired,
  discovery: PropTypes.string.isRequired,
  quest: PropTypes.string.isRequired,
  reward: PropTypes.string.isRequired,
};

export default Game;
