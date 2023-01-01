import { faker } from '@faker-js/faker';

import { AuthenticationParams } from '@/domain/usecases';
import { AccountModel } from '../models';

export const mockAuthentication = (): AuthenticationParams => ({
    email: faker.name.firstName(),
    senha: faker.animal.cat(),
});


export const mockAccountModel = (): AccountModel => ({
    accessToken: faker.datatype.uuid()
})