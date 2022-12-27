import { HttpPostClient, HttpPostClientParams } from '../protocols/http/http-post-client';

export class HttpPostClientSpy implements HttpPostClient {
    public url?: string;

    public body?: any;

    async post({ url, body }: HttpPostClientParams): Promise<void> {
        this.url = url;
        this.body = body;

        return Promise.resolve();
    }
}
