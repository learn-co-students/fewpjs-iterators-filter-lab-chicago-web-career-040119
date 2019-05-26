// Code your solution here
let findMatching = (array, name) => {
  return array.filter(person => person.toLowerCase() === name.toLocaleLowerCase())
}

let fuzzyMatch = (array, query) => {
  return array.filter(person => {
    let lowName = person.toLowerCase()
    let cutName = lowName.slice(0, query.length)
    return cutName === query.toLowerCase()
  })
}

let matchName = (array, person) => {
  return array.filter(obj => {
    return obj.name === person
  })
}
