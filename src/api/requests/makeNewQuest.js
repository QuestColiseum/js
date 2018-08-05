export default () => {
  return fetch('http://localhost:3001/quests', {
    method: 'POST'
  })
  .then(response => {
    return response.json()
  })
  .catch(error => {
    return error
  })
}
