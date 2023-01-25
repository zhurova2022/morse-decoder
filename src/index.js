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
};

function decode(expr) {
    let sliceResult = [];
    let result = [];
    
    function sliceIntoArr(expr, count){
        for (let i = 0; i < expr.length; i += count){
            const items = expr.slice(i, i + count);
            sliceResult.push(items);
        }
        return sliceResult;
    }
  
    let arr = sliceIntoArr(expr, 10);

    for(let i = 0; i < arr.length; i++){
         arr[i] = arr[i].replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
         result.push(arr[i]);
    }
    return result.map(i => MORSE_TABLE[i] || ' ').join('');

}

module.exports = {
    decode
}