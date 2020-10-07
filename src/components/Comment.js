import React from 'react'
export const Comment = ({comment, excerpt}) => (
  <article className="post-excerpt">
    <h2>{comment.name}</h2>
    <p>{excerpt ?comment.body.substring(0, 100): comment.body}</p>
  </article>
)
