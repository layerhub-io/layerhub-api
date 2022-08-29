import axios, { AxiosInstance } from "axios"
import appConfig from "../common/app-config"
import config from "../common/app-config"
import ListResponse from "../common/responses/list-response"
import { ResourceImage, ResourceQuery } from "../interfaces/resources"

class PixabayService {
  client: AxiosInstance
  constructor() {
    this.client = axios.create({
      baseURL: "https://pixabay.com/api/",
    })
  }

  public getResources = async ({ query, page, perPage }: ResourceQuery) => {
    let encodedWord = query.replace(/\s+/g, "+").toLowerCase()
    return new Promise((resolve, reject) => {
      this.client
        .get(`?key=${config.pixabay.apiKey}&q=${encodedWord}&image_type=photo&page=${page}&per_page=${perPage}`)
        .then((response: any) => {
          const data = response.data.hits.map((hit: any) => {
            const suffix = hit.previewURL.split("https://cdn.pixabay.com/")[1]
            return {
              id: hit.id,
              preview: `${appConfig.proxyBase}/resources/pixabay/${suffix}`,
              src: hit.webformatURL,
              object: "pixabayImage",
            }
          })
          const res = new ListResponse<ResourceImage>({
            data: data,
            page: parseInt(page),
            perPage: parseInt(perPage),
            total: response.data.total,
          })
          resolve(res.toJSON())
        })
        .catch((err) => reject(err))
    })
  }
}

export default PixabayService
