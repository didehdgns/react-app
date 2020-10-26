import React, { useEffect, useState } from 'react';
import fire from './fire'
import Comment from './Comment'

export default function CommentList(){
    const [commentList, setCommentList] = useState();

    useEffect(() => {
        const commentRef = fire.database().ref('comments');
        commentRef.on('value', snapshot => {
            const comments = snapshot.val();
            const commentList = [];
            for(let id in comments){
                commentList.push(comments[id]);
            }
            console.log(commentList);
            setCommentList(commentList);

        });
    }, []);
    return(
        <div>
            {commentList ? commentList.map(
                (comment,index) => 
                <div>
                    <Comment comment={comment} key={index}/>
                </div>
            ) : ''}
        </div>
    )
}