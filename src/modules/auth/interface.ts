type AccountType = "REGULAR" | "GOOGLE" | "FACEBOOK" | "APPLE"
type TokenType = "WEB" | "APPLICATION"

export interface User {
  id: string
  name: string
  picture: string
  locale: string
}

export interface Account {
  id: string
  type: AccountType
  userId: string
  email: string
  password: string
  verifiedEmail: boolean
}

export interface Token {
  id: string
  userId: string
  name: string
  secret: string
  type: TokenType
}
