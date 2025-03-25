const palindromes = function (string) {
    let lowercaseString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = lowercaseString.split('').reverse().join('');

    return lowercaseString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
