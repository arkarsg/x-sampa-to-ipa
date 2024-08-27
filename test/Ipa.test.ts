import { InvalidTokenError, toSampa } from '../src/index'

test('IPA to X-SAMPA converts 1 character', () => {
  expect(toSampa('ʃ')).toBe('S')
})

test('IPA to X-SAMPA handles ties', () => {
  expect(toSampa('t͡ʃ')).toBe('tS')
})

test('XSampa2Ipa handles invalid input', () => {
  expect(() => toSampa('t$')).toThrow(new InvalidTokenError())
})

test('Cuttlefish', () => {
  expect(toSampa('ˈkʌtl̩fɪʃ')).toBe('"kVtl=fIS')
})

test('Job', () => {
  expect(toSampa('d͡ʒɒb')).toBe('dZQb')
})

test('Rand', () => {
  expect(() => toSampa('!_')).toThrow(new InvalidTokenError())
})