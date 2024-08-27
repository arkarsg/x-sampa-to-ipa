export class InvalidTokenError extends Error {
    constructor() {
        super("invalid X-SAMPA symbol");
    }
}