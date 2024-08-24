import { tokenize } from "./tokenize";
import { xsampa2ipa } from "./xsampa2ipa";

const sampaToIpa = (xsampa: string) => {
    if (xsampa2ipa[xsampa] === undefined) {
        throw new Error("Invalid X-SAMPA symbol");
    } else {
        return xsampa2ipa[xsampa];
    }
};

export function toIpa(xsampa: string): string {
    const sampaTokens = tokenize(xsampa).map(
        (token) => sampaToIpa(token)
    );
    const ipa = sampaTokens.join("");
    return ipa;
}
