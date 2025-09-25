const prompt = require('prompt-sync')()
function max(...numbers){
    let result = -Infinity
    for(let number of numbers){
        if(number > result){
            result = number
        }
    }
    return result
}
console.log(max(-20, 4, 6, 9))

function reverse(){
    let input = prompt(`Enter a number: `)
    let newNumber = ``
    for(let i = input.length-1; i >= 0; i--){
        newNumber = newNumber + input[i]
    }
    if(newNumber[newNumber.length - 1] == `-`){
        newNumber = newNumber.slice(0, -1)
        newNumber = `-` + newNumber
    }
    return newNumber
} 
console.log(reverse())

function upperCase(){
    let input = prompt(`Enter a word or sentence: `)
    let newString = ``
    for(let x = 0; x < input.length; x++){
        let letterNumber = input.charCodeAt(x)
        if((letterNumber >= 97) && (letterNumber <=122)){
            newString = newString + String.fromCharCode(letterNumber - 32)
        }else{
            newString = newString + input[x]
        }
    }
    return newString
}
console.log(upperCase(26))