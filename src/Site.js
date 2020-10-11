import React from "react";
import PropTypes from "prop-types";

const site = [
  {
    id: 1,
    name: "React Icons",
    url: "https://react-icons.github.io/",
    using: "import {iconname} from 'react-icon/xx' <iconname className=''/>",
  },
  {
    id: 2,
    name: "React Navigation",
    url: "https://syoung-journey.tistory.com/40?category=867658",
    using: "게시글 확인",
  },
  {
    id: 3,
    name: "React firebase Login",
    url: "https://www.youtube.com/watch?v=cFgoSrOui2M&ab_channel=h3webdevtuts",
    using: "동영상 확인",
  },
];

function Game({ name, picture, rating }) {
  return;
}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {gamelist.map((list) => (
        <Game
          key={list.id}
          name={list.name}
          picture={list.image}
          rating={list.rating}
        />
      ))}
    </div>
  );
}
