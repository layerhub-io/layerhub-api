class ListResponse<T> {
  static object = "list"
  private page: number
  private data: T[]
  private hasNext: boolean
  private hasPrevious: boolean
  private total: number
  private totalPages: number
  private perPage: number

  constructor({ data, total, page, perPage }: { data: T[]; total: number; page: number; perPage: number }) {
    this.data = data
    this.total = total
    this.page = page
    this.perPage = perPage
    this.initialize()
  }

  private initialize() {
    this.totalPages = this.total / this.perPage
    this.hasPrevious = this.page > 1 ? true : false
    this.hasNext = this.page < this.totalPages ? true : false
  }

  public toJSON() {
    return {
      object: ListResponse.object,
      page: this.page,
      hasNext: this.hasNext,
      data: this.data,
      hasPrevious: this.hasPrevious,
      perPage: this.perPage,
      totalPages: this.totalPages,
    }
  }
}

export default ListResponse
