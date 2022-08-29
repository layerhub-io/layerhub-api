export interface Upload {
  userId: string
  type: string
  contentType: string
  name: string
  folder: string
  url: string
}

export interface User {
  id: string
  name: string
  type: string
  password: string
  email: string
}

export interface Token {
  id: string
  userId: string
  key: string
  secret: string
}
