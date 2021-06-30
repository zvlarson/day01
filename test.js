const myName = 'Zach'
console.log('Hello ' + myName)

//define a function for isdrinkingAge
//given an age -- say if someone is drinking age age or not
function isdrinkingAge(age) {
if (age < 21){
    console.log('Not Drinking Age')
} else {
    return console.log('Legal Drinking Age')
    }
} 
let userAge = 24
isdrinkingAge (userAge)
