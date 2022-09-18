export type HttpPostParams = {
  url: string
}

export interface HttpPostClient {
  post: (httpPostParams: HttpPostParams) => Promise<void>
}
