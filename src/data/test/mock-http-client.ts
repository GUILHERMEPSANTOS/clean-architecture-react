import { HttpPostClient, HttpPostClientParams } from '@/data/protocols/http/http-post-client';

export class HttpPostClientSpy implements HttpPostClient {
    public url?: string;

    public body?: object;

    async post({ url, body }: HttpPostClientParams): Promise<void> {
        this.url = url;
        this.body = body;

        return Promise.resolve();
    }
}
