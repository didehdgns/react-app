import React from "react";
import PropTypes from "prop-types";

const gamelist = [
  {
    id: 1,
    name: "유로파 유니버셜리스 4",
    image:
      "https://w.namu.la/s/07ed17c1199b717605203a521f1b491b6e0fb10b5cd05b8becfab159a63a8539dc62f83b0013b1dc71340e2d63cc8e5de3808e69a0c300b34abf17138e1ef40abd99a0dc72f1213e7952263b69a97f2d634b867bf469350d1cacba79d0b49c972e299b810b57988ca62de2a9b80dcca4",
    rating: 5,
  },
  {
    id: 2,
    name: "리그 오브 레전드",
    image:
      "https://ww.namu.la/s/597fd331cfc9bb77651d54e7df4d9f6dc8b65a262863ad2c1b4631fe8a3ba7d6933d6ea2981f1a42c080780bc5ab868209afdd3604178f97e0b4bde1f1808e6e8aaaffd0e82ad710105bdc20b227f4608c7f38b623b67cafe93f23dbfa925fe1",
    rating: 3,
  },
  {
    id: 3,
    name: "문명 5",
    image:
      "https://w.namu.la/s/4ee18e30e33dfdef4a4c133755fa61110fd267224ee35259e6b6a87f85affbe73d66623358706818917246d3f8fd7ff0c798bc94284c771f9fd253607fe6987cd675e15a734c1500f7cc650ad29929ac700b99ba295078e238ef5d6640fd3463335a6656cab21fe3723847ad1f3a1c66",
    rating: 4.3,
  },
];

function Game({ name, picture, rating }) {
  return (
    <div>
      <h2>{name} 페이지를 보고 있습니다.</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="300px" height="300px" />
    </div>
  );
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
