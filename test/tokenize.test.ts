import { tokenize } from '../src/tokenize'


test('Basic tokenize', () => {
  expect(tokenize('aAbBcC')).toStrictEqual(['a', 'A', 'b', 'B', 'c', 'C'])
})

test('Tokenizer handles tokens with backslashes', () => {
  expect(tokenize('j\\og')).toStrictEqual(['j\\', 'o', 'g'])
})

test('Tokenizer length precedence', () => {
  expect(tokenize('tSIna')).toStrictEqual(['tS', 'I', 'n', 'a'])
})

test('Tokenizer handles invalid chars', () => {
  expect(() => tokenize('t͡ʃ')).toThrow(new Error("Invalid X-SAMPA symbol"));
})
