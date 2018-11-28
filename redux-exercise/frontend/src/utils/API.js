export const api = "http://localhost:3001"

// Generate a unique token
export const token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
