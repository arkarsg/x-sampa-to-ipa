import { xsampa2ipa } from "./xsampa2ipa";

const sortedKeys = Object.keys(xsampa2ipa).sort((a, b) => b.length - a.length);

const splitAt = (xs: string, idx: number) => [xs.slice(0, idx), xs.slice(idx)]

const isAsciiString = (str: string) => /^[\x00-\x7F]+$/g.test(str);

class Tokenizer {
    sampaString: string
    tokens: string[]

    constructor(sampaString: string) {
        this.sampaString = sampaString;
        this.tokens = []
    }

    tokenize(): string[] {
        while (this.sampaString && this.sampaString.length > 0) {
            const [token, newString] = this.next();
            this.tokens.push(token);
            this.sampaString = newString;
        }
        return this.tokens
    }

    next(): [string, string] {
        const candidateSampa = sortedKeys.find(s => this.sampaString.startsWith(s));
        const splitLength = candidateSampa ? candidateSampa.length : 0;
        const [token, rest] = splitAt(this.sampaString, splitLength)
        return [token, rest || '']
    }
}

export function tokenize(sampaString: string): string[] {
    if (!isAsciiString(sampaString)) {
        throw new Error("Invalid X-SAMPA symbol")
    }
    return (new Tokenizer(sampaString)).tokenize()
}