import { faker } from '@faker-js/faker';

import { RemoteAuthentication } from './remote-authentication';

import { HttpPostClientSpy } from '@/data/test/mock-http-client';
import { mockAuthentication } from '@/domain/test/mock-authentication';
import { InvalidCredentialError } from '@/domain/errors/invalid-credential-error';
import { StatusCode } from '@/data/protocols/http/http-response';

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

        const params = mockAuthentication();

        await sut.auth(params);

        expect(httpPostClientSpy.body).toEqual(params);
    });

    test('Should throw InvalidCredentialError if HttpPostClient returns 401', async () => {
        const { httpPostClientSpy, sut } = makeSut();

        const params = mockAuthentication();

        httpPostClientSpy.response = {
            status: StatusCode.unauthorized
        }

        const promise = sut.auth(params);

        await expect(promise).rejects.toThrow(new InvalidCredentialError());
    });
});
