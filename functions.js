function list (clientsArray) {
  return clientsArray
    .map(client => `
<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
  ${client.name}
  <strong>$ ${client.balance.toFixed(2)}</strong>
</li>`.trim())
    .join('')
}

function order (clientsArray, property) {
  return [...clientsArray].sort((a, b) => {
    if (typeof a[property] === 'number' && typeof b[property] === 'number') {
      return a[property] - b[property]
    }
    return String(a[property]).toLowerCase().localeCompare(String(b[property]).toLowerCase())
  })
}

function total (clientsArray) {
  return clientsArray.reduce((sum, client) => sum + client.balance, 0)
}

function info (indexNumber) {
  return clients.find(client => client.index === indexNumber)
}

function search (queryString) {
  const query = String(queryString).toLowerCase()
  return clients.filter(client => client.name.toLowerCase().includes(query))
}
