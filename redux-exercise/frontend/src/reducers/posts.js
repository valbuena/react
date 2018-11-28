import {
  GET_POSTS,
  GET_POSTS_BY_CATEGORY,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  PLUS_VOTE_POST,
  MINUS_VOTE_POST
} from '../actions/posts'
import {
  DELETE_COMMENT,
  ADD_COMMENT
} from '../actions/comments'

export default function posts (state={}, action){
  switch (action.type){
    case GET_POSTS:
    case GET_POSTS_BY_CATEGORY:
       return action.posts
    case ADD_POST:
       return [...state, action.post]
    case DELETE_POST:
      return (state.filter(post => (
        (action.post.id !== post.id)
      )))
    case ADD_COMMENT:
    return (state.map(post => (
      ((action.comment.parentId === post.id)? {...post, 'commentCount':post['commentCount']+1}: post)
    )));
    case DELETE_COMMENT:
    return (state.map(post => (
      ((action.comment.parentId === post.id)? {...post, 'commentCount':post['commentCount']-1}: post)
    )));
    case EDIT_POST:
    case PLUS_VOTE_POST:
    case MINUS_VOTE_POST:
       return (state.map(post => (
         ((action.post.id === post.id)?action.post: post)
       )));
    default :
      return state
  }
}
