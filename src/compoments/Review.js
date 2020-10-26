import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Review.css';
import firebase from './fire';
import CommentList from './CommentList';

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
        const item = this.state.item;
        
        if (location.state === undefined) {
          history.push("/"); // home으로 가기

        }
      }
      

      render() {
        
        const item = this.state.item;
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
                                    <span>아이콘 이미지</span>
                                </li>
                                <li>
                                    <From key={item.id}/>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div>
                  <CommentList/>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      }
}

function From(key){
  const [comment,setComment]= useState('');
 
  
  const handleOnChane = (e) => {
      setComment(e.target.value)
  }
  const addComment = () => {
      const commentRef = firebase.database().ref('data/comment/');
      const comments = {
          comment,
      }

      commentRef.push(comments)
  }
  return(
      <div>
          <input type="text" onChange={handleOnChane} value={comment} placeholder="평가를 입력하세요" />
          <button onClick={addComment}>평가 게시</button>
      </div>
  )
}
export default Review;