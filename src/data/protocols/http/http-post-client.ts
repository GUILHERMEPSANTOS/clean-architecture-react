export type HttpPostClientParams = {
    url: string;
    body?: any
}

export interface HttpPostClient {
    post(params: HttpPostClientParams): Promise<void>
}
