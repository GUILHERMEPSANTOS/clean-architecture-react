import { HttpPostClient, HttpPostClientParams } from '@/data/protocols/http/http-post-client';
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response';

export class HttpPostClientSpy implements HttpPostClient {
    public url?: string;

    public body?: object;

    public response: HttpResponse<any> = {
        status: HttpStatusCode.ok,
    };

    async post<Response>({ url, body }: HttpPostClientParams): Promise<HttpResponse<Response>> {
        this.url = url;
        this.body = body;

        return Promise.resolve(this.response);
    }
}
