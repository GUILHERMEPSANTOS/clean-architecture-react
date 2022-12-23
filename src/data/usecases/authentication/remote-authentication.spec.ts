import { HttpPostClient } from '../../protocols/http/http-post-client';
import { RemoteAuthentication } from './remote-authentication';

import { HttpPostClientSpy } from '../../test/mock-http-client';

describe('RemoteAuthentication', () => {
    test('Should call HttpClient with correct URL', () => {
        const httpPostClientSpy = new HttpPostClientSpy();
        const url = 'any_url';
        const sut = new RemoteAuthentication(httpPostClientSpy, url);
        sut.auth();

        expect(httpPostClientSpy.url).toBe(url);
    });
});
