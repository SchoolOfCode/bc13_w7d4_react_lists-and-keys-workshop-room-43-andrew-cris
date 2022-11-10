import React from 'react';

import './index.css';


function Post(props) {
  return <article>
    <h2>{props.title}</h2>
    {/* {console.log(props)} */}
    <h3>{props.date}</h3>
    <h3>{props.author}</h3>
    <p>{props.text}</p>
  </article>;
}

export default Post;
