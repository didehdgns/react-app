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
      data: { games },
    } = await axios.get(
      "https://doc-08-a0-docs.googleusercontent.com/docs/securesc/vcna2qvfuth63ql45skejetamb54hqhp/pfv7vuf4rdsv9h8o6fpjp7mdtbkhuf6f/1601343375000/09917110403716147371/09917110403716147371/1JuU3laQJLsuNQHVUi-eBTD2X_AaqzE7m?e=download&authuser=0&nonce=srm6rd3cinntg&user=09917110403716147371&hash=5bm45ieo24d4vee5ojvdmd54il61hd0i"
    );
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
