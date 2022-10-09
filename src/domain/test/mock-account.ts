import { faker } from '@faker-js/faker'

import { AuthenticationParams } from 'domain/usecases'
import { AccountModel } from '../models'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccontModel = (): AccountModel => ({
  accessToken: faker.random.alphaNumeric()
})
