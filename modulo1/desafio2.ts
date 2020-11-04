const users = [
  { name: 'Diego', age: 23, company: 'Rocketseat' },
  { name: 'Gabriel', age: 15, company: 'Google' },
  { name: 'Lucas', age: 30, company: 'Facebook' },
]

// map
const ages = users.map(user => {
  return user.age
})
console.log('Ages: ', ages)

// filter
const filterUsers = users.filter(user => {
  return user.company === 'Rocketseat' && user.age > 18
})
console.log('Filter User: ', filterUsers)

// find
const findUsers = users.find(user => {
  return user.company === 'Google'
})
console.log('Find Users: ', findUsers)

// multiple
const finalUsers = users.map(user => {
  return { ...user, age: user.age * 2 }
}).filter(user => {
  return user.age < 50
})
console.log('Final Users: ', finalUsers)