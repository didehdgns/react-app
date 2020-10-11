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
            <div className="detail_game_rating">
              <ul className="detail_game_rating_left">
                <li>
                  <h2>게임 소개</h2>
                </li>
              </ul>
              <ul className="detail_game_rating_right">
                <li>
                  <h2>리뷰</h2>
                </li>
                <ul className="detail_game_rating_right_count">
                  <li>
                    <h2>평점</h2>
                  </li>
                  <li>
                    <h3>{location.state.userscore}</h3>
                  </li>
                </ul>
              </ul>
            </div>
            <h3 className="detail_game__summary">{location.state.summary}</h3>
            <div className="detail_game_about">
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">장르</li>
                <ul className="detail_game__genres2">
                  {location.state.genres.map((genres, index) => (
                    <li key={index}>{genres}</li>
                  ))}
                </ul>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">언어</li>
                <li className="detail_game__genres_name2">
                  {location.state.supportLang}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">등급</li>
                <li className="detail_game__genres_name2">
                  {location.state.grade}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">플랫폼</li>
                <li className="detail_game__genres_name2">
                  {location.state.platform}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">출시</li>
                <li className="detail_game__genres_name2">
                  {location.state.rdate}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">제작</li>
                <li className="detail_game__genres_name2">
                  {location.state.product}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">배급</li>
                <li className="detail_game__genres_name2">
                  {location.state.distributor}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
