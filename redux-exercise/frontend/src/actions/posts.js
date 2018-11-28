import * as PostsAPI from '../utils/PostsAPI'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST= 'DELETE_POST'
export const EDIT_POST= 'EDIT_POST'
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const PLUS_VOTE_POST = 'PLUS_VOTE_POST'
export const MINUS_VOTE_POST = 'MINUS_VOTE_POST'

//ADD POST
export function addPost (post) {
  return {
    type : ADD_POST,
    post : post
  }
}

export function createPost (post) {
  return dispatch => {
    PostsAPI
        .addPost(post)
        .then(post => dispatch(addPost(post)))
  }
}

//REMOVE POST
export function deletePost (post) {
  return {
    type : DELETE_POST,
    post
  }
}

export function removePost (id) {
  return dispatch => {
    PostsAPI
        .deletePost(id)
        .then(post => dispatch(deletePost(post)))
  }
}

//EDIT POST
export function editPost (post) {
  return {
    type : EDIT_POST,
    post : post
  }
}

export function updatePost (post) {
  return dispatch => {
    PostsAPI
        .editPost(post)
        .then(post => dispatch(editPost(post)))
  }
}


//GET POSTS
export function getPosts (posts) {
  return {
    type : GET_POSTS,
    posts
  }
}
export const fetchPosts = () => dispatch => (
  PostsAPI
      .getAllPosts()
      .then(posts => dispatch(getPosts(posts)))
);

//GET POSTS BY CATEGORY
export function getPostsByCategory (posts) {
  return {
    type : GET_POSTS_BY_CATEGORY,
    posts
  }
}

export const fetchPostsByCategory = (category) => dispatch => (
  PostsAPI
      .getPostsByCategory(category)
      .then(posts => dispatch(getPostsByCategory(posts)))
);

//ADD OR REMOVE VOTES
export function plusVotePost (post) {
  return {
    type : PLUS_VOTE_POST,
    post
  }
}

export function minusVotePost (post) {
  return {
    type : MINUS_VOTE_POST,
    post
  }
}

const upVote = {
  "option" : "upVote"
}
const downVote = {
  "option" : "downVote"
}

export function addVotePost (id) {
  return dispatch => {
    PostsAPI
        .updatePostVote(id, upVote)
        .then(post => dispatch(plusVotePost(post)))
  }
}

export function removeVotePost (id) {
  return dispatch => {
    PostsAPI
        .updatePostVote(id, downVote)
        .then(post => dispatch(minusVotePost(post)))
  }
}
