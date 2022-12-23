import { HttpPostClient } from '../../protocols/http/http-post-client';

export class RemoteAuthentication {
    constructor(
        private readonly httpPostClient: HttpPostClient,
        private readonly url: string,
    ) { }

    async auth() {
        await this.httpPostClient.post(this.url);
    }
}
