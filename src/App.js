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
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ games: movies, isLoading: false });
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
                poster={games.medium_cover_image}
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
