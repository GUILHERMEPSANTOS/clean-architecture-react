export type HttpPostParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post: (httpPostParams: HttpPostParams) => Promise<void>
}
