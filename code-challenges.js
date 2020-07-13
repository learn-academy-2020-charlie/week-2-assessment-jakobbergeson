// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const divisble3 = (value) => {
    if (value % 3 == 0 ){
        return `${value} is divisible by three`
    } else {
        return `${value} is not divisible by three`
    }
}
 console.log(divisble3(num1));
 console.log(divisble3(num2));
 console.log(divisble3(num3));
 




// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
const capitol = (array) => {
   let capitalized = array.map(value => {
      return value[0].toUpperCase () + value.substring(1)
   })

    return capitalized
}
console.log(capitol(randomNouns));





// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

// Create function that will output only numbers from an array when plugged into .filter() 
let numsPlease = (value) => {
    if(typeof(value)=== 'number'){
        return value
    }
}
// .filter() here that will create an array with only numbers and then put them in order from least to greatest with .sort()
let numsOnly = (array) => {
    return array.filter(numsPlease).sort(function(a, b){return a-b})
}

console.log(numsOnly(mixedDataArray))
   

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const firstVowel = (str) => {
    let vowelIndex = null
    for(let i = 0; i <str.length; i++) {
		if (str.charAt(i) =='a' || str.charAt(i) == 'e' || str.charAt(i) =='i' || str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' ||
        str.charAt(i) == 'E' || str.charAt(i) =='I' || str.charAt(i) =='O' || str.charAt(i) == 'U'){
            vowelIndex = i 
            break
        }
    }
 return vowelIndex
     
}
console.log(firstVowel(vowelTester1))
console.log(firstVowel(vowelTester2))  






// --------------------5) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

let catOnly = toonimals.filter(value => value.animal === "cat")
console.log(catOnly)

// --------------------6) Using the toonimals variable, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

let notCats = (arr) => {
    let dogNames = []
    arr.filter(value => {
        if(value.animal !=="cat")
        dogNames.push(value.name)
    })
    return dogNames.toString()
}

 console.log(notCats(toonimals))