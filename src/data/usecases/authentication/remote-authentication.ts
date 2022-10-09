import { Authentication, AuthenticationParams } from '@/domain/usecases'
import { HttpPostClient } from '@/data/protocols/http'
import { HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialsError } from '@/domain/errors'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { AccountModel } from '@/domain/models'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) { }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse =
      await this.httpPostClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body ?? {} as AccountModel
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
 