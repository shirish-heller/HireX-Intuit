import React from 'react';
import classes from './PostContainer.css';
import Post from '../../UI/Post/Post';

const PostsContainer = (props)=> {
    return (
        <div className={classes.Container}>
        {
            props.posts.map(post=> {
                return <Post onBid={props.onBid} key={post._id} data={post}/>
            })
        }
        </div>
    )
}

export default PostsContainer;