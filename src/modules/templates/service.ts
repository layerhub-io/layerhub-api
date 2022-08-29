import { Template } from "../../interfaces/app";
import { MongoDBClient } from "../../common/database/client";

class Service {
  private client: MongoDBClient;
  constructor() {
    this.client = new MongoDBClient();
  }

  public async get({ userId }: { userId: string | null }) {
    try {
      const data = await this.client.find("templates", {
        ...(userId && { userId }),
      });
      return data;
    } catch (err) {
      throw new Error(err as any);
    }
  }

  public async create(data: Template) {
    try {
      const template = await this.client.insert("templates", data);
      return template;
    } catch (err) {
      throw new Error(err as any);
    }
  }

  public async update(id: string, data: Template) {
    try {
      const template = await this.client.update("templates", id, data);
      return template;
    } catch (err) {
      throw new Error(err as any);
    }
  }

  public async remove(id: string) {
    try {
      const template = await this.client.remove("templates", id);
      return template;
    } catch (err) {
      throw new Error(err as any);
    }
  }

  public async getById(id: string): Promise<Template> {
    try {
      const data = (await this.client.findOneById("templates", id)) as Template;
      return data;
    } catch (err) {
      throw new Error(err as any);
    }
  }
}

export default Service;
