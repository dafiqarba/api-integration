// src/utils/strings.test.ts
import { objectToQueryParams } from './strings'

describe('utils - objectToQueryParams', () => {
  it('should convert an object to a query string', () => {
    const params = { key1: 'value1', key2: 'value2' }
    expect(objectToQueryParams(params)).toBe('?key1=value1&key2=value2')
  })

  it('should return an empty string for an empty object', () => {
    expect(objectToQueryParams({})).toBe('')
  })

  it('should handle undefined and null values by skipping them', () => {
    const params = { key1: 'value1', key2: undefined, key3: null }
    expect(objectToQueryParams(params)).toBe('?key1=value1')
  })

  it('should handle special characters by encoding them', () => {
    const params = { 'key@': 'value&' }
    expect(objectToQueryParams(params)).toBe('?key%40=value%26')
  })

  it('should handle numeric values correctly', () => {
    const params = { key1: 123, key2: 456 }
    expect(objectToQueryParams(params)).toBe('?key1=123&key2=456')
  })

  it('should handle boolean values correctly', () => {
    const params = { key1: true, key2: false }
    expect(objectToQueryParams(params)).toBe('?key1=true&key2=false')
  })
})
