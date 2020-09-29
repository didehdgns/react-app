import React from "react";
import axios from "axios";
import Game from "./Game";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    games: [],
  };

  getGames = async () => {
    const {
      data: {
        data: { games },
      },
    } = await axios.get(
      "https://raw.githubusercontent.com/didehdgns/react-app/master/json/jsondata.json"
    );
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
                title={games.title}
                summary={games.summary}
                poster={games.cover_img}
                genres={games.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
