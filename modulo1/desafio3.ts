const arr = [1, 2, 3, 4, 5];

// arr.map(function (item) {
//   return item + 10;
// })
arr.map(item => item + 10)

interface User {
  name: string,
  age: number
}
const user = { name: 'Diego', age: 23 }
// function showAge(user: User) {
//   return user.age
// }
const showAge = ({ age }: User) => age
showAge(user)

const name = "Diego"
const age = 23
// function showUser(name = 'Diego', age = 18) {
//  return { name, age }
// }
const showUser = (name = 'Diego', age = 18) => ({ name, age })
showUser(name, age)
showUser(name)

// const promise = function () {
//   return new Promise(function (resolve, reject) {
//     return resolve()
//   })
// }
const promise = () => new Promise((resolve, _) => resolve())

export { }