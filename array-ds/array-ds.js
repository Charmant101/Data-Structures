'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the reverseArray function below.
function reverseArray(a) {
    
    let arrLength = a.length;
    // if the length of the array is zero we return a but if not we initially set the desired output to a variable called reverse which takes an empty array 
    if (arrLength === 0) return a;
    let reverse = [];
    // we then loop through in a reverse order and push through the array values into reverse
    for (let i = arrLength - 1; i >= 0; i--) {

        reverse.push(a[i]);
    }
    // we then return reverse.
    return reverse;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
