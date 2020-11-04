class User {
  public password: string
  public email: string
  protected admin: boolean

  public constructor(email: string, password: string) {
    this.email = email
    this.password = password
    this.admin = false
  }

  public get isAdmin(): boolean {
    return this.admin
  }
}

class Admin extends User {
  public constructor(email: string, password: string) {
    super(email, password)
    this.admin = true
  }
}

const user = new User('example@example.com', '123456')
console.log(user.isAdmin) // false

const admin = new Admin('example@example.com', '123456')
console.log(admin.isAdmin) // true

export { }