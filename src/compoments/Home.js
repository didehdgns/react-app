import React from "react";
import axios from "axios";
import Game from "./Game";
import "./App.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    games: [],
  };

  getGames = async () => {
    const {
      data: { games },
    } = await axios.get("https://game-app-9c71b.firebaseio.com/data.json");
    console.log(games);

    this.setState({ games: games, isLoading: false });
  };
  async componentDidMount() {
    this.getGames();
  }
  render() {
    const { isLoading, games } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="games">
            {games.map((games) => (
              <Game
                key={games.id}
                id={games.id}
                year={games.year}
                rdate={games.rdate}
                etitle={games.etitle}
                title={games.title}
                summary={games.summary}
                poster={games.cover_img}
                genres={games.genres}
                userscore={games.userscore}
                supportLang={games.supportLang}
                grade={games.grade}
                platform={games.platform}
                product={games.product}
                distributor={games.distributor}
                minOS={games.minOS}
                minCPU={games.minCPU}
                minGraphic={games.minGraphic}
                minMemory={games.minMemory}
                minStorage={games.minStorage}
                recOS={games.recOS}
                recCPU={games.recCPU}
                recGraphic={games.recGraphic}
                recMemory={games.recMemory}
                recStorage={games.recStorage}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
