import axios, { AxiosInstance } from "axios"
import appConfig from "../common/app-config"
import config from "../common/app-config"
import ListResponse from "../common/responses/list-response"
import { ResourceImage, ResourceQuery } from "../interfaces/resources"

class PexelsService {
  client: AxiosInstance
  constructor() {
    this.client = axios.create({
      baseURL: "https://api.pexels.com/v1",
      headers: {
        Authorization: config.pexels.apiKey,
      },
    })
  }
  public getResources = async ({ query, page, perPage }: ResourceQuery) => {
    let encodedWord = query.replace(/\s+/g, "+").toLowerCase()
    return new Promise((resolve, reject) => {
      this.client
        .get(`/search?query=${encodedWord}&page=${page}&per_page=${perPage}`)
        .then((response: any) => {
          const data = response.data.photos.map((photo: any) => {
            const suffix = photo.src.tiny.split("https://images.pexels.com/")[1]
            return {
              id: photo.id,
              preview: `${appConfig.proxyBase}/resources/pexels/${suffix}`,
              src: photo.src.original,
              object: "pexelsImage",
            }
          })

          const res = new ListResponse<ResourceImage>({
            data: data,
            page: parseInt(page),
            perPage: parseInt(perPage),
            total: response.data.total_results,
          })
          resolve(res.toJSON())
        })
        .catch((err) => reject(err))
    })
  }
}

export default PexelsService
