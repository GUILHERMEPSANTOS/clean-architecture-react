import { HttpResponse } from './http-response';

export type HttpPostClientParams = {
    url: string;
    body?: object
}

export interface HttpPostClient {
    post<Response>(params: HttpPostClientParams): Promise<HttpResponse<Response>>
}
