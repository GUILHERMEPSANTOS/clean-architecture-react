import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http';


import { AccountModel } from '@/domain/models';
import { Authentication, AuthenticationParams } from '@/domain/usecases';
import { InvalidCredentialError, UnexpectedError } from '@/domain/errors';
;

export class RemoteAuthentication implements Authentication {
    constructor(
        private readonly httpPostClient: HttpPostClient<AccountModel, AuthenticationParams>,
        private readonly url: string,
    ) { }

    async auth(params: AuthenticationParams): Promise<AccountModel> {
        const httpResponse = await this.httpPostClient.post({ url: this.url, body: params });

        switch (httpResponse.status) {
            case HttpStatusCode.ok:
                return httpResponse.data as AccountModel;

            case HttpStatusCode.unauthorized:
                throw new InvalidCredentialError();

            case HttpStatusCode.internalServerError:
                throw new UnexpectedError();

            case HttpStatusCode.noContent:
                throw new UnexpectedError();

            default:
                throw new UnexpectedError();
        }
    }
}
