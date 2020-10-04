function encode([...text], shift) {
    return text.reduce((a, word) => {
        let encodedWord = "";
        const wordCode = word.charCodeAt()
        if (wordCode >= 65 && wordCode <= 90) {
            encodedWord = String.fromCharCode(((wordCode - 65 + shift) % 26) + 65);
        } else if (wordCode >= 97 && wordCode <= 122) {
            encodedWord = String.fromCharCode(((wordCode - 97 + shift) % 26) + 97);
        } else {
            return a + word
        }
        return a + encodedWord
    }, "")
}

function decode([...text], shift) {
    return text.reduce((a, word) => {
        let encodedWord = "";
        const wordCode = word.charCodeAt()
        if (wordCode >= 65 && wordCode <= 90) {
            const wordCodeShiftUpper = ((wordCode - 65 - shift) % 26) + 65
            encodedWord = String.fromCharCode(wordCodeShiftUpper < 65 ? 91 - (65 - wordCodeShiftUpper) : wordCodeShiftUpper);
        } else if (wordCode >= 97 && wordCode <= 122) {
            const wordCodeShiftLower = ((wordCode - 97 - shift) % 26) + 97
            encodedWord = String.fromCharCode(wordCodeShiftLower < 97 ? 123 - (97 - wordCodeShiftLower) : wordCodeShiftLower);
        } else {
            return a + word
        }
        return a + encodedWord
    }, "")
}

module.exports = { encode, decode }