import axios, { AxiosInstance } from "axios";
const BASE_URL = "https://8ddf43qwt5.execute-api.us-east-1.amazonaws.com/api";

class Renderer {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: "FREE",
      },
    });
  }
  public async render(payload: any): Promise<string> {
    const data = (await this.client.post("/api", payload)) as any;
    return data.image;
  }
}

export default Renderer;
