import React from "react";
import axios from "axios";
import Game from "./Game";
import "./App.css";
import { MdGames } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";

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
          <div>
            <div className="header">
              <ul className="headerleft">
                <li>
                  <MdGames className="mdgames" />
                </li>
                <li>GAMEGO!</li>
              </ul>

              <ul className="headerright">
                <li>
                  <VscSearch className="vscsearch" />
                  <input type="text" placeholder="원하는 게임을 입력하세요" />
                </li>
                <li>로그인</li>
                <li>회원가입</li>
              </ul>
            </div>
            <div className="games">
              {games.map((games) => (
                <Game
                  key={games.id}
                  id={games.id}
                  year={games.year}
                  etitle={games.etitle}
                  title={games.title}
                  summary={games.summary}
                  poster={games.cover_img}
                  genres={games.genres}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default App;
