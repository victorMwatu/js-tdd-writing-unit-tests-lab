import { isPalindrome } from "../utils";

describe( "isPalindrome", () => {
    it("returns true if word is palindrome and false if it isn't", () => {
        const notPalindrome = isPalindrome("car");
        const palindrome = isPalindrome("racecar");
        const blank = isPalindrome("");
        expect(palindrome).toBe(true);
        expect(notPalindrome).toBe(false);
        expect(blank).toBe(false);
    });
    it("throws typeError if word is not a string", () => {
        expect(()=> isPalindrome(234)).toThrow(TypeError);
    });
    it("retruns false if word is empty string", ()=> {
        expect(isPalindrome("")).toBe(false);
    });
})