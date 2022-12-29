import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialError } from '@/domain/errors/invalid-credential-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { AccountModel } from '@/domain/models/account-model';
import { AuthenticationParams } from '@/domain/usecases/authentication';

export class RemoteAuthentication {
    constructor(
        private readonly httpPostClient: HttpPostClient,
        private readonly url: string,
    ) { }

    async auth(params?: AuthenticationParams): Promise<AccountModel> {
        const httpResponse = await this.httpPostClient.post<AccountModel, AuthenticationParams>({ url: this.url, body: params });

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
