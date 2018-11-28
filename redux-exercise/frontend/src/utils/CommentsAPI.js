import {api, headers} from './API.js'

export const updateCommentVote = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(	option)
  })
  .then(res => res.json())
  .then(data => data)

  export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`, {
      method: 'DELETE',
      headers
      })
    .then(res => res.json())
    .then(data => data)

  export const addComment = (comment) =>
    fetch(`${api}/comments`, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then(res => res.json())
      .then(data => data)

  export const editComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then(res => res.json())
      .then(data => data)
