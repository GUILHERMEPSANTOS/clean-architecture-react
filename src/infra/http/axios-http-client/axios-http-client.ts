import { HttpPostClient, HttpPostClientParams, HttpResponse } from '@/data/protocols/http';

import axios from 'axios';

export class AxiosHttpClient<Response, Params>
    implements HttpPostClient<Response, Params>
{
    async post({ url, body }: HttpPostClientParams<Params>): Promise<HttpResponse<Response>> {

        const httpResponse = await axios.post(url, body);

        return {
            status: httpResponse.status,
            data: httpResponse.data
        }
    }
}
