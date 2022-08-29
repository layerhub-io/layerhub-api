import { MongoDBClient } from "../../common/database/client"
import { ShapeType } from "../../interfaces/editor"
class ElementsService {
  private client: MongoDBClient
  constructor() {
    this.client = new MongoDBClient()
  }

  public async get() {
    try {
      const data = await this.client.find("elements", {})
      return data
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async create(data: ShapeType) {
    try {
      const template = await this.client.insert("elements", data)
      return template
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async remove(id: string) {
    try {
      const template = await this.client.remove("elements", id)
      return template
    } catch (err) {
      throw new Error(err as any)
    }
  }
}

export default ElementsService
