import { InvalidTokenError, toIpa } from '../src/index'

test('X-Sampa to IPA converts 1 character', () => {
  expect(toIpa('S')).toBe('ʃ')
})

test('X-Sampa to IPA supports voiced postalveolar affricate', () => {
  expect(toIpa('tS')).toBe('t͡ʃ')
})

test('XSampa2Ipa handles invalid input', () => {
  expect(() => toIpa('t͡ʃ')).toThrow(new InvalidTokenError())
})

test('Cuttlefish', () => {
  expect(toIpa('"kVtl=fIS')).toBe('ˈkʌtl̩fɪʃ')
})

test('Job', () => {
  expect(toIpa('dZQb')).toBe('d͡ʒɒb')
})

test('Rand', () => {
  expect(() => toIpa('!_')).toThrow(new InvalidTokenError())
})