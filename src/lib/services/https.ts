export default class HttpService {
  private baseURL: string

  constructor(baseUrl: string = '') {
    this.baseURL = baseUrl
  }

  async get<T>(endpoint: string, headers: Record<string, string> = {}): Promise<T> {
    try {
      const url = `${this.baseURL}/${endpoint}`

      const options: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      }

      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }

      return (await response.json()) as T

    } catch (error) {
      console.error('error request GET: ', error)
      throw error
    }
  }
}