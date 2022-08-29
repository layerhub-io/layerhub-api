import axios, { AxiosInstance } from "axios"
import config from "../common/app-config"
import { ResourceQuery } from "../interfaces/resources"

class IconscoutService {
  client: AxiosInstance
  constructor() {
    this.client = axios.create({
      baseURL: "https://api.iconscout.com/v3/",
      headers: {
        "Client-ID": config.iconscout.clientId,
        "Client-Secret": config.iconscout.secret,
      },
    })
  }
  public getResources = async ({ query, page, perPage }: ResourceQuery) => {
    let encodedWord = query.replace(/\s+/g, "+").toLowerCase()
    return new Promise((resolve, reject) => {
      this.client
        .get("search", {
          params: {
            query: encodedWord,
            product_type: "item",
            asset: "illustration",
            price: "free",
            per_page: perPage,
            page: page,
            formats: ["svg"],
            styles: ["colored-outline"],
            sort: "color",
          },
        })
        .then((response: any) => {
          const items = response.data.response.items.data
          resolve(items)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default IconscoutService
