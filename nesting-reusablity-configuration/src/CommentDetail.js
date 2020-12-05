import React from 'react';
//import faker from 'faker';

const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={props.source}/>
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    Noor
                </a>
                <div className='metadata'>
                    <span className='date'>{props.timeAgo}</span>
                </div>
                <div className='text'>{props.commentText}</div>
            </div>
        </div>
    );
}

export default CommentDetail;