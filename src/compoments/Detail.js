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
        <div className="detail">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="detail_game_data">
            <h1 className="detail_game__title" style={{}}>
              {location.state.title}
            </h1>
            <div>
              <ul>
                <li>
                  <h2>게임 소개</h2>
                </li>
              </ul>
              <ul>
                <li>리뷰</li>
                <li>평점</li>
                <li>{location.state.userscore}</li>
              </ul>
            </div>
            <h3 className="detail_game__summary">{location.state.summary}</h3>

            <ul className="detail_game__genres">
              <li>장르</li>
              {location.state.genres.map((genres, index) => (
                <li key={index} className="detail_genres__genre">
                  {genres}
                </li>
              ))}
            </ul>
            <ul>
              <li>언어</li>
              <li>{location.state.supportLang}</li>
            </ul>
            <ul>
              <li>등급</li>
              <li>{location.state.grade}</li>
            </ul>
            <ul>
              <li>플랫폼</li>
              <li>{location.state.platform}</li>
            </ul>
            <ul>
              <li>출시</li>
              <li>{location.state.rdate}</li>
            </ul>
            <ul>
              <li>제작</li>
              <li>{location.state.product}</li>
            </ul>
            <ul>
              <li>배금</li>
              <li>{location.state.distributor}</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
