import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_COMMENTS_BY_POST,
  PLUS_VOTE_COMMENT,
  MINUS_VOTE_COMMENT
} from '../actions/comments'

export default function comments (state={}, action){
  switch (action.type){
    case GET_COMMENTS_BY_POST:
       return action.comments
    case ADD_COMMENT:
          return [...state, action.comment]
    case DELETE_COMMENT:
     return (state.filter(comment => (
       (action.comment.id !== comment.id)
     )))
    case EDIT_COMMENT:
    case PLUS_VOTE_COMMENT:
    case MINUS_VOTE_COMMENT:
      return (state.map(comment => (
        ((action.comment.id === comment.id)?action.comment: comment)
      )));
    default :
      return state
  }
}
