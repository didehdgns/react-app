import React from "react";
import axios from "axios";
import Game from "./Game";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    games: [],
    login: false,
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

    this.setState({ games: games, isLoading: false, login: false });
  };
  async componentDidMount() {
    this.getGames();
  }
  render() {
    const { isLoading, login, games } = this.state;
    console.log(login);
    return (
      <section className="container">
        {login ? (
          <div>
            <span>로그인</span> <span>회원가입</span>
          </div>
        ) : (
          <div>
            <span>로그아웃</span>
          </div>
        )}
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
