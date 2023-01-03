import { AxiosHttpClient } from "./axios-http-client";

import axios from 'axios';
import { faker } from "@faker-js/faker";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

type SutTypes = {
    sut: AxiosHttpClient<any, any>
}

const mockSut = (): SutTypes => {
    const sut = new AxiosHttpClient<any, any>();

    return {
        sut
    }
}

describe("AxiosHttpClient", () => {
    test("Should call axios with correct URL and ", async () => {
        const { sut } = mockSut();
        
        const url = faker.internet.url();
        const body = {};        
        
        await sut.post({ url: url, body: body });

        expect(mockedAxios.post).toHaveBeenCalledWith(url);
    });
});