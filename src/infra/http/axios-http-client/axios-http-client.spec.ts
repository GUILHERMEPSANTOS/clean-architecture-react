import { AxiosHttpClient } from "./axios-http-client";

import { HttpPostClientParams } from "@/data/protocols/http";
import { mockPostRequest } from "@/infra/test/mock-post-request";

import axios from 'axios';

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
    test("Should call axios with correct values ", async () => {
        const { sut } = mockSut();
        const { url, body } = mockPostRequest();

        await sut.post({ url: url, body: body });

        expect(mockedAxios.post).toHaveBeenCalledWith(url, body);
    });
});