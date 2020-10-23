import React, {useState} from 'react';
import firebase from './fire'

export default function Form(){
    const [comment,setComment]= useState('');

    const handleOnChane = (e) => {
        setComment(e.target.value)
    }
    const addComment = () => {
        const commentRef = firebase.database().ref("data/games/");
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