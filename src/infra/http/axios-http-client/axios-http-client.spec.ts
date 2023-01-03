import { AxiosHttpClient } from "./axios-http-client";

import { mockAxios } from "@/infra/test";
import { mockPostRequest } from "@/data/test";

import axios from "axios";

jest.mock('axios');

type SutTypes = {
    sut: AxiosHttpClient<any, any>
    mockedAxios: jest.Mocked<typeof axios>
}

const mockSut = (): SutTypes => {
    const sut = new AxiosHttpClient<any, any>();
    const mockedAxios = mockAxios();
    return {
        sut,
        mockedAxios
    }
}

describe("AxiosHttpClient", () => {
    test("Should call axios with correct values ", async () => {
        const { sut, mockedAxios } = mockSut();
        const { url, body } = mockPostRequest();

        await sut.post({ url: url, body: body });

        expect(mockedAxios.post).toHaveBeenCalledWith(url, body);
    });

    test("Should call axios with correct values ", async () => {
        const { sut, mockedAxios } = mockSut();
        const { url, body } = mockPostRequest();

        await sut.post({ url: url, body: body });

        expect(mockedAxios.post).toHaveBeenCalledWith(url, body);
    });

    test("Should call axios and return a value", async () => {
        const { sut, mockedAxios } = mockSut();
        const { url, body } = mockPostRequest();

        const httpResponse = await sut.post({ url: url, body: body });

        expect(httpResponse).toEqual(await mockedAxios.post.mock.results[0].value)
    })
});