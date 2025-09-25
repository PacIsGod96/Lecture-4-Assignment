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
    
}