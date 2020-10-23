import React from 'react';
import { Link } from "react-router-dom";
import './Review.css'

class Review extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          item : this.props.location.state
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
        const gen = [item.genres];
        const { location } = this.props;
        
        console.log(item)
        console.log(location.state)
        console.log(this.props.history)
        if (location.state) {
          return (
            <div className="review">
              <img
                src={item.poster}
                alt={item.title}
                title={item.title}
              />
              <div className="review_game_data">
                <h1 className="review_game__title" style={{}}>
                  {item.title}
                </h1>
                <div className="review_game_rating">
                  <ul className="review_game_rating_right">
                    <li>
                      <h2><Link to={{
                        pathname:
                      `/game/${item.etitle}/About`,
                      state:{
                        id:`${item.id}`,
                        title: `${item.title}`,
                        etitle: `${item.etitle}`,
                        genres: gen,
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
                    >게임 정보</Link></h2>
                    </li>
                    <ul className="review_game_rating_right_count">
                      <li>
                        <h2>평점</h2>
                      </li>
                      <li>
                        <h3>{item.userscore}</h3>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div>
                    <div>
                        <div>
                        {item.title}에 대한 평가 작성<br/>
                        이 게임의 좋았던 점 또는 싫었던 점, 그리고 이를 다른 사람들에게 추천하는지 여부에 대해 써주세요.
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <img></img>
                                </li>
                                <li>
                                    로그인 후 작성 가능합니다.
                                </li>
                            </ul>
                            
                        </div>
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

export default Review;