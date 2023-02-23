const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':  ' ',
};

function decode(expr) {
    // write your solution here
    let letters = [];
    for (let i = 0; i < expr.length / 10; i++) {
       letters.push(expr.substr(i*10,10));  
    }
    for (let i = 0; i < letters.length; i++) {
        letters[i] = letters[i].replace('**********', " ");
        letters[i] = letters[i].replace(/00/g, "");
        letters[i] = letters[i].replace(/10/g, ".");
        letters[i] = letters[i].replace(/11/g, "-");

        letters[i] = MORSE_TABLE[letters[i]];
    }

    return letters.join('');
}

module.exports = {
    decode
}