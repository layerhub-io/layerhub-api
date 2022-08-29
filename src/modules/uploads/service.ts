import { Upload } from "./interfaces"
import { MongoDBClient } from "../../common/database/client"

class UploadsService {
  private client: MongoDBClient
  constructor() {
    this.client = new MongoDBClient()
  }

  public async get(params: any) {
    try {
      const data = await this.client.find("uploads", params)
      return data
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async create(data: Partial<Upload>) {
    try {
      const upload = await this.client.insert("uploads", data)
      return upload
    } catch (err) {
      throw new Error(err as any)
    }
  }

  public async remove(id: string): Promise<Record<string, string>> {
    try {
      const template = await this.client.remove("uploads", id)
      return template
    } catch (err) {
      throw new Error(err as any)
    }
  }
}

export default UploadsService
