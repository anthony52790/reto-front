import HttpService from "./services/https"

export const api = new HttpService(process.env.NEXT_PUBLIC_BASE_URL)