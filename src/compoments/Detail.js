import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); // home으로 가기
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="game">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="game_data">
            <h3 className="game__title" style={{}}>
              {location.state.title}
            </h3>
            <h5 className="game__year">{location.state.year}</h5>
            <ul className="game__genres">
              {location.state.genres.map((genres, index) => (
                <li key={index} className="genres__genre">
                  {genres}
                </li>
              ))}
            </ul>
            <p className="game__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
