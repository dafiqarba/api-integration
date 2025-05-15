import { objectToQueryParams } from './strings'

export const apiRequest = async <T>(
  url: string,
  params?: Record<string, any> | null
): Promise<T> => {
  const newUrl = params ? `${url}${objectToQueryParams(params)}` : url

  try {
    const response = await fetch(newUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    if (error instanceof TypeError) {
      // Handle network errors
      throw new Error('Network error: Failed to fetch')
    } else if (error instanceof Error) {
      // Handle other general errors
      throw new Error(`Fetch Error: ${error.message}`)
    } else {
      // Unexpected error type
      throw new Error('An unknown error occurred')
    }
  }
}
