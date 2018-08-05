export default (id) => {
  return fetch(`http://localhost:3001/quest_levels/${id}`, {
    method: 'GET'
  })
  .then(response => {
    return response.json()
  })
  .catch(error => {
    return error
  })
}
