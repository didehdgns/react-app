import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item : this.props.location.state,
      
    }
  }
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    
    if (location.state === undefined) {
      history.push("/"); // home으로 가기
    }
    
  }
  render() {
    const item = this.state.item;

   
    const { location } = this.props;
   
    console.log(location.state)
    console.log(this.props.history)
    if (location.state) {
      return (
        <div className="detail">
          <img
            src={item.poster}
            alt={item.title}
            title={item.title}
          />
          <div className="detail_game_data">
            <h1 className="detail_game__title" style={{}}>
              {item.title}
            </h1>
            <div className="detail_game_rating">
              <ul className="detail_game_rating_left">
                <li>
                  <h2>게임 소개</h2>
                </li>
              </ul>
              <ul className="detail_game_rating_right">
                <li>
                  <h2><Link to={{
                    pathname:
                  `/game/${item.etitle}/Review`,
                  state:{
                    id:`${item.id}`,
                    key:`${item.id}`,
                    title: `${item.title}`,
                    etitle: `${item.etitle}`,
                    genres: `${item.genres}`,
                    userscore: `${item.userscore}`,
                    poster: `${item.poster}`,
                    summary: `${item.summary}`,
                    supportLang: `${item.supportLang}`,
                    grade: `${item.grade}`,
                    platform: `${item.platform}`,
                    rdate: `${item.rdate}`,
                    distributor : `${item.distributor }`,
                    minOS: `${item.minOS}`,
                    minCPU: `${item.minCPU}`,
                    minGraphic: `${item.minGraphic}`,
                    minMemory: `${item.minMemory}`,
                    minStorage: `${item.minStorage}`,
                    recOS: `${item.recOS}`,
                    recCPU: `${item.recCPU}`,
                    recGraphic: `${item.recGraphic}`,
                    recMemory: `${item.recMemory}`,
                    recStorage: `${item.recStorage}`,
                  }}}
                >리뷰</Link></h2>
                </li>
                <ul className="detail_game_rating_right_count">
                  <li>
                    <h2>평점</h2>
                  </li>
                  <li>
                    <h3>{item.userscore}</h3>
                  </li>
                </ul>
              </ul>
            </div>
            <h3 className="detail_game__summary">{item.summary}</h3>
            <div className="detail_game_about">
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">장르</li>
                <li className="detail_game__genres_name2">
                  {item.genres}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">언어</li>
                <li className="detail_game__genres_name2">
                  {item.supportLang}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">등급</li>
                <li className="detail_game__genres_name2">
                  {item.grade}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">플랫폼</li>
                <li className="detail_game__genres_name2">
                  {item.platform}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">출시</li>
                <li className="detail_game__genres_name2">
                  {item.rdate}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">제작</li>
                <li className="detail_game__genres_name2">
                  {item.product}
                </li>
              </ul>
              <ul className="detail_game__genres">
                <li className="detail_game__genres_name">배급</li>
                <li className="detail_game__genres_name2">
                  {item.distributor}
                </li>
              </ul>
            </div>
            <div className="detail_game_about_system">
              <div className="detail_game_about_system_min">
                <span>최소 사양</span>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">OS</li>
                  <li className="detail_game__genres_name2">
                    {item.minOS}
                  </li>
                </ul>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">CPU</li>
                  <li className="detail_game__genres_name2">
                    {item.minCPU}
                  </li>
                </ul>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">그래픽</li>
                  <li className="detail_game__genres_name2">
                    {item.minGraphic}
                  </li>
                </ul>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">메모리</li>
                  <li className="detail_game__genres_name2">
                    {item.minMemory}
                  </li>
                </ul>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">저장공간</li>
                  <li className="detail_game__genres_name2">
                    {item.minStorage}
                  </li>
                </ul>
              </div>
              <div className="detail_game_about_system_rec">
                <span>권장 사양</span>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">OS</li>
                  <li className="detail_game__genres_name2">
                    {item.recOS}
                  </li>
                </ul>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">CPU</li>
                  <li className="detail_game__genres_name2">
                    {item.recCPU}
                  </li>
                </ul>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">그래픽</li>
                  <li className="detail_game__genres_name2">
                    {item.recGraphic}
                  </li>
                </ul>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">메모리</li>
                  <li className="detail_game__genres_name2">
                    {item.recMemory}
                  </li>
                </ul>
                <ul className="detail_game__genres">
                  <li className="detail_game__genres_name">저장공간</li>
                  <li className="detail_game__genres_name2">
                    {item.recStorage}
                  </li>
                </ul>
              </div>
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
