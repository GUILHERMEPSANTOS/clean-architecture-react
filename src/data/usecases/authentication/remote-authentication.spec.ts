import { faker } from '@faker-js/faker';

import { RemoteAuthentication } from './remote-authentication';

import { HttpPostClientSpy } from '@/data/test';
import { HttpStatusCode } from '@/data/protocols/http';

import { mockAccountModel, mockAuthentication } from '@/domain/test';
import { InvalidCredentialError, UnexpectedError } from '@/domain/errors';
import { AuthenticationParams } from '@/domain/usecases';
import { AccountModel } from '@/domain/models';


type SutTypes = {
    sut: RemoteAuthentication,
    httpPostClientSpy: HttpPostClientSpy<AccountModel, AuthenticationParams>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy<AccountModel, AuthenticationParams>();
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
