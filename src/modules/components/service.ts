import { MongoDBClient } from "../../common/database/client";

class Service {
  private client: MongoDBClient;
  constructor() {
    this.client = new MongoDBClient();
  }

  public async get({ userId }: { userId: string | null }) {
    try {
      const data = await this.client.find("components", {
        ...(userId && { userId }),
      });
      return data;
    } catch (err) {
      throw new Error(err as any);
    }
  }

  public async create(data: any) {
    try {
      const template = await this.client.insert("components", data);
      return template;
    } catch (err) {
      throw new Error(err as any);
    }
  }

  public async update(id: string, data: any) {
    try {
      const template = await this.client.update("components", id, data);
      return template;
    } catch (err) {
      throw new Error(err as any);
    }
  }

  public async remove(id: string) {
    try {
      const template = await this.client.remove("components", id);
      return template;
    } catch (err) {
      throw new Error(err as any);
    }
  }

  public async getById(id: string): Promise<any> {
    try {
      const data = (await this.client.findOneById("components", id)) as any;
      return data;
    } catch (err) {
      throw new Error(err as any);
    }
  }
}

export default Service;
