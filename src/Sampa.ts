import { InvalidTokenError } from "./InvalidTokenError";
import { tokenizeSampa } from "./tokenize";
import { ipa2xsampa, xsampa2ipa } from "./xsampa2ipa";

const sampaToIpa = (xsampa: string) => {
    if (xsampa2ipa[xsampa] === undefined) {
        throw new InvalidTokenError();
    } else {
        return xsampa2ipa[xsampa];
    }
};

const ipaToSampa = (ipaToken: string) => {
    if (ipa2xsampa[ipaToken] === undefined) {
        throw new InvalidTokenError();
    } else {
        return ipa2xsampa[ipaToken]
    }
}

export function toIpa(xsampa: string): string {
    const sampaTokens = tokenizeSampa(xsampa).map(
        (token) => sampaToIpa(token)
    );
    const ipa = sampaTokens.join("");
    return ipa;
}

export function toSampa(ipa: string): string {
    const ipaChars = [...ipa]
    console.log(ipaChars)
    const sampaTokens = ipaChars
                        .filter((token) => token !== '͡')
                        .map((token) => ipaToSampa(token));
    console.log(sampaTokens) 
    return sampaTokens.join('')
}