import React from 'react';

import './index.css';


function Post(props) {
  return <article>
  <h2>{props.title}</h2>
    <h3>{props.date},{props.author}</h3>
      <p>{props.text}</p>
  </article>;
}

export default Post;
