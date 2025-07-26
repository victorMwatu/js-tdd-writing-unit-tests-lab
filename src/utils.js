export function isPalindrome(word) {
    if(!word) return false;
    let reverse = "";
    if(typeof(word) !== "string") {
        throw new TypeError("Input not");
    }
    for(const l of word){
       reverse = l + reverse;
    }
    return reverse === word;
}

console.log(isPalindrome(""));