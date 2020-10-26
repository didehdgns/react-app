import React from 'react';

export default function comment({comment}){
    console.log(comment)
    return<div>
        {comment.title}
    </div>
}