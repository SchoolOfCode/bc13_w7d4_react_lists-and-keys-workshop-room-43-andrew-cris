import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">{posts.map((postObj) => {
    return <Post 
    key={ postObj.postId } 
    title={postObj.title}
    date={postObj.date}
    author={postObj.author}
    text={postObj.text}
    />
  })}</main>;
}

export default Main;
