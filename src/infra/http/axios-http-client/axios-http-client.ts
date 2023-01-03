import { HttpPostClientParams } from '@/data/protocols/http';

import axios from 'axios';

export class AxiosHttpClient<Response, Params>
// implements HttpPostClient<Response, Params>
{
    async post({ url, body }: HttpPostClientParams<Params>): Promise<void> {

        await axios.post(url);
    }
}