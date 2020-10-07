import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPost, postSelector } from '../slices/post'

import { Post } from '../components/Post'

const SinglePostPage = ({ match }) => {
  const dispatch = useDispatch()
  const { post, loading: postLoading, hasErrors: postHasErrors } = useSelector(
    postSelector
  )


  useEffect(() => {
    const { id } = match.params

    dispatch(fetchPost(id))
  }, [dispatch, match])

  const renderPost = () => {
    if (postLoading) return <p>Loading post...</p>
    if (postHasErrors) return <p>Unable to display post.</p>

    return <Post post={post} />
  }


  return (
    <section>
      {renderPost()}
      <h2>Comments</h2>
    </section>
  )
}

export default SinglePostPage
