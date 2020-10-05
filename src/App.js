import React from "react";
import axios from "axios";
import Game from "./Game";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    mall2: [],
  };

  getDatas = async () => {
    const {
      data: {
        data: {
          megamall2: { customer },
        },
      },
    } = await axios.get(
      "https://raw.githubusercontent.com/didehdgns/react-app/master/json/megamall2.json"
    );
    console.log(customer);
    this.setState({ mall2: customer, isLoading: false });
  };
  async componentDidMount() {
    this.getDatas();
  }
  render() {
    const { isLoading, mall2 } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="games">
            {mall2.map((mall2) => (
              <Game
                key={mall2.customerid}
                id={mall2.customerid}
                name={mall2.name}
                job={mall2.job}
                taste={mall2.taste}
                residence={mall2.residence}
                discovery={mall2.discovery}
                quest={mall2.quest}
                reward={mall2.reward}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
