import axios from 'axios'

import { AxiosHttpClient } from "./axios-http-client"
import { mockAxios } from '@/infra/test'
import { mockPostRequest } from '@/data/test/mock-http-post'

jest.mock('axios')

type SutType = {
    sut: AxiosHttpClient,
    mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutType => {
    const sut = new AxiosHttpClient();
    const mockedAxios = mockAxios();

    return {
        sut,
        mockedAxios
    }
}

describe('AxiosHttpClient', () => {
    test('Should call axios with correct values', async () => {
        const { sut, mockedAxios } = makeSut()
        const request = mockPostRequest()
        await sut.post(request)
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    test('Should return correct statusCode and body', async () => {
        const { sut, mockedAxios } = makeSut()
        const promise =  sut.post(mockPostRequest())
        expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
})