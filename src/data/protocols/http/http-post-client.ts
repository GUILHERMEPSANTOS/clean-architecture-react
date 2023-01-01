import { HttpResponse } from '.';

export type HttpPostClientParams<Params> = {
    url: string;
    body?: Params
}

export interface HttpPostClient<Response, Params> {
    post(params: HttpPostClientParams<Params>): Promise<HttpResponse<Response>>
}
