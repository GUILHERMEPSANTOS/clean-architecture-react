import { HttpPostClientParams } from "@/data/protocols/http";

import { faker } from "@faker-js/faker";

export const mockPostRequest = (): HttpPostClientParams<any> => ({
    url: faker.internet.url(),
    body: {}
})