import {
    HttpPostClient,
    HttpPostClientParams,
    HttpResponse,
    HttpStatusCode
} from '@/data/protocols/http';

export class HttpPostClientSpy<Response, Params> implements HttpPostClient<Response, Params> {
    public url?: string;

    public body?: any;

    public response: HttpResponse<any> = {
        status: HttpStatusCode.ok,
    };

    async post({ url, body }: HttpPostClientParams<Params>): Promise<HttpResponse<Response>> {
        this.url = url;
        this.body = body as Params;

        return Promise.resolve(this.response);
    }
}
