import * as CommentsAPI from '../utils/CommentsAPI'
import * as PostsAPI from '../utils/PostsAPI'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT= 'DELETE_COMMENT'
export const EDIT_COMMENT= 'EDIT_COMMENT'
export const GET_COMMENTS_BY_POST = 'GET_COMMENTS_BY_POST'
export const PLUS_VOTE_COMMENT = 'PLUS_VOTE_COMMENT'
export const MINUS_VOTE_COMMENT = 'MINUS_VOTE_COMMENT'

//ADD POST
export function addComment (comment) {
  return {
    type : ADD_COMMENT,
    comment : comment
  }
}

export function createComment (comment) {
  return dispatch => {
    CommentsAPI
        .addComment(comment)
        .then(comment => dispatch(addComment(comment)))
  }
}

//REMOVE COMMENT
export function deleteComment (comment) {
  return {
    type : DELETE_COMMENT,
    comment
  }
}

export function removeComment (id) {
  return dispatch => {
    CommentsAPI
        .deleteComment(id)
        .then(comment => dispatch(deleteComment(comment)))
  }
}

//EDIT POST
export function editComment (comment) {
  return {
    type : EDIT_COMMENT,
    comment : comment
  }
}

export function updateComment (comment) {
  return dispatch => {
    CommentsAPI
        .editComment(comment)
        .then(comment => dispatch(editComment(comment)))
  }
}


//GET COMENTS BY POST
export function getCommentsByPost (comments) {
  return {
    type : GET_COMMENTS_BY_POST,
    comments
  }
}

export const fetchCommentsByPost = (id) => dispatch => (
  PostsAPI
      .getCommentsByPost(id)
      .then(comments => dispatch(getCommentsByPost(comments)))
);


//ADD OR REMOVE VOTE
export function plusVoteComment (comment) {
  return {
    type : PLUS_VOTE_COMMENT,
    comment
  }
}

export function minusVoteComment (comment) {
  return {
    type : MINUS_VOTE_COMMENT,
    comment
  }
}

const upVote = {
  "option" : "upVote"
}
const downVote = {
  "option" : "downVote"
}

export function addVoteComment (id) {
  return dispatch => {
    CommentsAPI
        .updateCommentVote(id, upVote)
        .then(comment => dispatch(plusVoteComment(comment)))
  }
}

export function removeVoteComment (id) {
  return dispatch => {
    CommentsAPI
        .updateCommentVote(id, downVote)
        .then(comment => dispatch(minusVoteComment(comment)))
  }
}
