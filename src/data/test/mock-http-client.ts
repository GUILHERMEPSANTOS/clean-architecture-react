import { HttpPostClient, HttpPostClientParams } from '@/data/protocols/http/http-post-client';
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response';

export class HttpPostClientSpy implements HttpPostClient {
    public url?: string;

    public body?: any;

    public response: HttpResponse<any> = {
        status: HttpStatusCode.ok,
    };

    async post<Response, Params>({ url, body }: HttpPostClientParams<Params>): Promise<HttpResponse<Response>> {
        this.url = url;
        this.body = body as Params;

        return Promise.resolve(this.response);
    }
}
