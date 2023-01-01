import { faker } from '@faker-js/faker';

import { RemoteAuthentication } from './remote-authentication';

import { HttpPostClientSpy } from '@/data/test/mock-http-client';
import { mockAccountModel, mockAuthentication } from '@/domain/test/mock-account';
import { InvalidCredentialError } from '@/domain/errors/invalid-credential-error';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { UnexpectedError } from '@/domain/errors/unexpected-error';

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

        const params = mockAuthentication();

        await sut.auth(params);

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
            status: HttpStatusCode.unauthorized
        }

        const promise = sut.auth(params);

        await expect(promise).rejects.toThrow(new InvalidCredentialError());
    });

    test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
        const { httpPostClientSpy, sut } = makeSut();

        const params = mockAuthentication();

        httpPostClientSpy.response = {
            status: HttpStatusCode.badRequest
        }

        const promise = sut.auth(params);

        await expect(promise).rejects.toThrow(new UnexpectedError());
    });

    test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
        const { httpPostClientSpy, sut } = makeSut();

        const params = mockAuthentication();

        httpPostClientSpy.response = {
            status: HttpStatusCode.notFound
        }

        const promise = sut.auth(params);

        await expect(promise).rejects.toThrow(new UnexpectedError());
    });

    test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
        const { httpPostClientSpy, sut } = makeSut();

        const params = mockAuthentication();

        httpPostClientSpy.response = {
            status: HttpStatusCode.internalServerError
        }

        const promise = sut.auth(params);

        await expect(promise).rejects.toThrow(new UnexpectedError());
    });

    test('Should return AccountModel if HttpPostClient returns 200', async () => {
        const { httpPostClientSpy, sut } = makeSut();

        const params = mockAuthentication();

        httpPostClientSpy.response = {
            status: HttpStatusCode.ok,
            data: mockAccountModel(),
        }

        const account = await sut.auth(params);

        await expect(httpPostClientSpy.response.data).toEqual(account);
    });
});
