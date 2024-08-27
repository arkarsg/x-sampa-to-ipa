import { InvalidTokenError } from '../src'
import { tokenizeSampa } from '../src/tokenize'


test('Basic tokenize', () => {
  expect(tokenizeSampa('aAbBcC')).toStrictEqual(['a', 'A', 'b', 'B', 'c', 'C'])
})

test('Tokenizer handles tokens with backslashes', () => {
  expect(tokenizeSampa('j\\og')).toStrictEqual(['j\\', 'o', 'g'])
})

test('Tokenizer length precedence', () => {
  expect(tokenizeSampa('tSIna')).toStrictEqual(['tS', 'I', 'n', 'a'])
})

test('Tokenizer handles invalid chars', () => {
  expect(() => tokenizeSampa('t͡ʃ')).toThrow(new InvalidTokenError());
})
