import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { StatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialError } from '@/domain/errors/invalid-credential-error';
import { AuthenticationParams } from '@/domain/usecases/authentication';

export class RemoteAuthentication {
    constructor(
        private readonly httpPostClient: HttpPostClient,
        private readonly url: string,
    ) { }

    async auth(params?: AuthenticationParams) {
        const httpResponse = await this.httpPostClient.post<any>({ url: this.url, body: params });

        switch (httpResponse.status) {
            case StatusCode.unauthorized:
                throw new InvalidCredentialError();
            default:
                Promise.resolve();
                break;
        }
    }
}
