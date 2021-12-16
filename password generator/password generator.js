// symbols and everthing
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
 "s", "t", "u", "v", "w", "x", "y", "z"],
signs = ["!", "(", ")", "?", "[", "]", "_", "%", "~", "#", "$", "^", "&", "*", "+", "=", ".", "-"],
capChar = characters.map(function(e) {return e.toUpperCase()});

// catch requierd data

//random number generator
function randomNum (max, min) { 
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//way v go
function totalyRandom(numChars = 1, numCapChars = 1, numNums = 1, numSigns = 1) {
    let sth = [];
    let output = "";
    for (let index = 0; index < numChars; index++) {
        sth.push(characters[randomNum(characters.length - 1, 0)]);
    }
    for (let index = 0; index < numCapChars; index++) {
        sth.push(capChar[randomNum(capChar.length - 1, 0)]);
    }
    for (let index = 0; index < numNums; index++) {
        sth.push(numbers[randomNum(numbers.length - 1, 0)]);
    }
    for (let index = 0; index < numSigns; index++) {
        sth.push(signs[randomNum(signs.length - 1, 0)]);
    }
    function hi() {
        if (sth.length !== 0) {
            let randomNumm = randomNum(sth.length - 1, 0);
            output += sth[randomNumm];
            sth.splice(randomNumm, 1);
            hi();
        }
        else {
            return output;
        }
    }
    hi()
    console.log(output)
}
totalyRandom(3,3,3,0);