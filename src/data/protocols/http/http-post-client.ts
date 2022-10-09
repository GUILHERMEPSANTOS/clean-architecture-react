import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (httpPostParams: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
