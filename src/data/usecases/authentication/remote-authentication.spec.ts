import { HttpPostClient } from 'data/protocols/http/http-post-client';
import { RemoteAuthentication } from './remote-authentication';

class HttpPostClientSpy implements HttpPostClient {
    public url?: string;

    async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
    }
}

describe('RemoteAuthentication', () => {
    test('Should call HttpClient with correct URL', () => {
        const httpPostClientSpy = new HttpPostClientSpy();
        const url = 'any_url';
        const sut = new RemoteAuthentication(httpPostClientSpy, url);
        sut.auth();

        expect(httpPostClientSpy.url).toBe(url);
    });
});
