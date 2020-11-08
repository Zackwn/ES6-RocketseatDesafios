interface IEmpresa {
  name: string,
  address: {
    city: string,
    state: string
  }
}

const empresa = {
  name: 'Rocketseat',
  address: {
    city: 'Rio do Sul',
    state: 'SC',
  }
}

const { address, name } = empresa
const { city, state } = address

console.log(name)
console.log(city)
console.log(state)

interface IUser {
  name: string,
  age: number
}

const showInfo = ({ name, age }: IUser) => {
  return `${name} has ${age} years old`
}
showInfo({ name: 'Diego', age: 23 })

export { }