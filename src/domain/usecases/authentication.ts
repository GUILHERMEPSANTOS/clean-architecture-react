import { AccountModel } from '@/domain/models';

export type AuthenticationParams = {
    email: string;
    senha: string;
}

export interface Authentication {
    auth(params: AuthenticationParams): Promise<AccountModel>;
}
