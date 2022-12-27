import { faker } from '@faker-js/faker';

import { AuthenticationRequestParams, RemoteAuthentication } from './remote-authentication';
import { HttpPostClient } from '../../protocols/http/http-post-client';

import { HttpPostClientSpy } from '../../test/mock-http-client';

type SutTypes = {
    sut: RemoteAuthentication,
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(httpPostClientSpy, url);

    return {
        httpPostClientSpy,
        sut,
    };
};

describe('RemoteAuthentication', () => {
    test('Should call HttpClient with correct URL', async () => {
        const url = faker.internet.url();
        const { httpPostClientSpy, sut } = makeSut(url);

        await sut.auth();

        expect(httpPostClientSpy.url).toBe(url);
    });

    test('Should call HttpClient with correct Body', async () => {
        const { httpPostClientSpy, sut } = makeSut();

        const mockAuthenticationRequest: AuthenticationRequestParams = {
            email: 'caio',
            senha: '123',
        };

        await sut.auth(mockAuthenticationRequest);

        expect(httpPostClientSpy.body).toEqual(mockAuthenticationRequest);
    });
});
