import { HttpPostClient } from '../../protocols/http/http-post-client';

export type AuthenticationRequestParams = {
    email: string;
    senha: string;
}

export class RemoteAuthentication {
    constructor(
        private readonly httpPostClient: HttpPostClient,
        private readonly url: string,
    ) { }

    async auth(params?: AuthenticationRequestParams) {
        await this.httpPostClient.post({ url: this.url, body: params });
    }
}
