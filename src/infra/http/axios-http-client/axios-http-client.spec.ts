import { AxiosHttpClient } from "./axios-http-client";
import { mockPostRequest, mockPostResponse } from "@/infra/test/mock-post-request";

import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.post.mockResolvedValue(mockPostResponse());

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

    test("Should call axios with correct values ", async () => {
        const { sut } = mockSut();
        const { url, body } = mockPostRequest();

        await sut.post({ url: url, body: body });

        expect(mockedAxios.post).toHaveBeenCalledWith(url, body);
    });

    test("Should call axios and return a value", async () => {
        const { sut } = mockSut();
        const { url, body } = mockPostRequest();

        const httpResponse = await sut.post({ url: url, body: body });

        expect(httpResponse).toEqual(mockPostResponse())
    })
});