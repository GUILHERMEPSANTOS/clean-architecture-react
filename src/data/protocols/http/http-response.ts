export enum HttpStatusCode {
    ok = 200,
    created = 201,
    accepted = 202,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    internalServerError = 500,
}

export type HttpResponse<Response> = {
    data?: Response,
    status: HttpStatusCode,
}
