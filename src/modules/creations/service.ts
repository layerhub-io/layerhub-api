import { Template } from "../../interfaces/app"
import { MongoDBClient } from "../../common/database/client"

class CreationsService {
  private client: MongoDBClient
  constructor() {
    this.client = new MongoDBClient()
  }

  public async get(params: any) {
    try {
      const data = await this.client.find("creations", params)
      return data
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async create(data: Template) {
    try {
      const template = await this.client.insert("creations", data)
      return template
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async update(id: string, data: Template) {
    try {
      const template = await this.client.update("creations", id, data)
      return template
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async remove(id: string) {
    try {
      const template = await this.client.remove("creations", id)
      return template
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async getById(id: string): Promise<Template | null> {
    try {
      const data = (await this.client.findOneById("creations", id)) as Template
      return data
    } catch (err) {
      return null
    }
  }
}

export default CreationsService
