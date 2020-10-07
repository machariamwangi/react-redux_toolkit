import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPost, postSelector } from '../slices/post';
import {fetchComments, commentsSelector} from '../slices/comments';


import { Post } from '../components/Post';
import {Comment} from  '../components/Comment';

const SinglePostPage = ({ match }) => {
  const dispatch = useDispatch()
  const { post, loading: postLoading, hasErrors: postHasErrors } = useSelector(
    postSelector
  )
  const  {comments, loading: commentLoading , hasErrors : commentHasErrors} = useSelector (
    commentsSelector
  )


  useEffect(() => {
    const { id } = match.params
    dispatch(fetchComments(id))
    dispatch(fetchPost(id))
  }, [dispatch, match])

  const renderPost = () => {
    if (postLoading) return <p>Loading post...</p>
    if (postHasErrors) return <p>Unable to display post.</p>

    return <Post post={post} />
  }
 const renderComment = () => {
    if (commentLoading) return <p>commentLoading post...</p>
    if (commentHasErrors) return <p>Unable to display commentHasErrors.</p>

    return comments.map((comment) => <Comment key={comment.id} comment={comment} excerpt />)
  }

  return (
    <section>
      {renderPost()}
      <h2>Comments</h2>
      {renderComment()}
    </section>
  )
}

export default SinglePostPage
