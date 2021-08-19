function encode(string) {
  const code = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  const encodedString = string.split('').map((letter) => {
    if (code[letter]) return code[letter];
    return letter;
  }).join('');

  return encodedString;
}

function decode(string) {
  const code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u', };

  const decodedString = string.split('').map((character) => {
    if (code[character]) return code[character];
    return character;
  }).join('');

  return decodedString;
}

module.exports = {
  decode,
  encode,
};