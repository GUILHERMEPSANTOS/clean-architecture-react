import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from "./axios-http-client"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient  =>  new AxiosHttpClient()

describe('AxiosHttpClient', () => {
    test('Should call axios with correct URL',async  () => {
        const sut = makeSut()
        const url = faker.internet.url()
        await sut.post({ url })
        expect(mockedAxios).toHaveBeenCalledWith(url)
    })
})