import { HttpResponse } from './http-response';

export type HttpPostClientParams<Params> = {
    url: string;
    body?: Params
}

export interface HttpPostClient {
    post<Response, Params>(params: HttpPostClientParams<Params>): Promise<HttpResponse<Response>>
}
