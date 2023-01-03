import { HttpPostClientParams, HttpResponse, HttpStatusCode } from "@/data/protocols/http";

import { faker } from "@faker-js/faker";

export const mockPostRequest = (): HttpPostClientParams<any> => ({
    url: faker.internet.url(),
    body: {}
})

export const mockPostResponse = (): HttpResponse<any> => ({
    status: HttpStatusCode.ok,
    data: {}
})