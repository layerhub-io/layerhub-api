import { Upload, User, Token } from "./interfaces"
import { MongoDBClient } from "../../common/database/client"

class UsersService {
  private client: MongoDBClient
  constructor() {
    this.client = new MongoDBClient()
  }

  public async get(params: any) {
    try {
      const data = await this.client.find("users", params)
      return data
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async create(data: Partial<Upload>) {
    try {
      const users = await this.client.insert("users", data)
      return users
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async remove(id: string) {
    try {
      const user = await this.client.remove("users", id)
      return user
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async createToken(props: Partial<Token>) {
    try {
      const token = await this.client.insert("tokens", props)
      return token
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public findToken = async (props: Partial<Token>) => {
    try {
      const token = await this.client.find("tokens", props)
      return token
    } catch (err) {
      throw new Error(err as any)
    }
  }
  removeToken(id: string) {}

  public createUser = async (props: Partial<User>) => {
    try {
      const doc = await this.client.insert("users", props)
      const { password, ...user } = doc
      return user
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async findUser(props: Partial<User>): Promise<User> {
    try {
      const users = await this.client.find("users", props)
      return users[0] as User
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async findUserById(id: string): Promise<User> {
    try {
      const users = await this.client.find("users", { _id: id })
      return users[0] as User
    } catch (err) {
      throw new Error(err as any)
    }
  }

  updateUser(id: string, params: Record<string, string>) {}

  removeUser(id: string) {}
}

export default UsersService
