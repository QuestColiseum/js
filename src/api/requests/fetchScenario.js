export default (id) => {
  return fetch(`http://localhost:3001/scenarios/${id}`, {
    method: 'GET'
  })
  .then(response => {
    return response.json()
  })
  .catch(error => {
    return error
  })
}
