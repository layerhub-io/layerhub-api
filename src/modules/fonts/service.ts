import { MongoDBClient } from "../../common/database/client"

class FontsService {
  private client: MongoDBClient
  constructor() {
    this.client = new MongoDBClient()
  }

  public async getFonts() {
    try {
      const data = await this.client.find("fonts", {})
      return data
    } catch (err) {
      throw new Error(err as any)
    }
  }
}

export default FontsService
