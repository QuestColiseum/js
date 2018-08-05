export default (params) => {
  return fetch(`http://localhost:3001/gambits?character_id=${params.character_id}&scenario_id=${params.scenario_id}&status=${params.status}`, {
    method: 'POST'
  })
  .then(response => {
    return response.json()
  })
  .catch(error => {
    return error
  })
}
