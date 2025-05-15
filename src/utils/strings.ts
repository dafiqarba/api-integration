/**
 * Converts an object to a URL query string.
 * @param params - The object containing the query parameters.
 * @returns A query string (example: "?param1=value1&param2=value2").
 */
export const objectToQueryParams = (params: Record<string, any>): string => {
  const queryParams = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
    .join('&')

  // If queryParams is not empty, prepend '?' to the string
  return queryParams ? `?${queryParams}` : ''
}
