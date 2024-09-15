/*00.EXO
--------------------------------------------------
let makesTen = (a, b) => {
    if (a === 10 || b === 10 || a+b == 10){
        return true;
    } else {
        return false;
    }
}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));
--------------------------------------------------
Expected Result :
makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true
*/
/*01.EXO
----------------------------------------------------
let calcAge = age => {
            console.log( age * 365 )
    }
calcAge(65);
calcAge(0);
calcAge(20);
-----------------------------------------------------
Expected Result : 
calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300
*/
/*02.EXO
------------------------------------------------------*/
/*let addUp = num =>{
    if (num > 0 && num <= 1000){
    let sumOfAddUp = 0;
    for (i=0; i<=num; i++){
        sumOfAddUp += i;
    } console.log(sumOfAddUp)
} else {
    console.log(`${num} is invalid choose between 1 and 1000`)
}
}
addUp(4)
addUp(13)
addUp(600)

Expected result :
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
*/
/*03.EXO
---------------------------------------------------------------*/
/*let minMax = (toSort) => {
    //added this one after testing...
    if (toSort.length === 0) {
        console.log("The array is empty");
        //forgot to break it all by returning if not it will jump to next section and still give me 2 undefined for an empty array
        return;
    }

    toSort.sort(( a, b) => {return a - b});
    //easy to extract minimum from array its always .sift()
    const toExtractMin = toSort.shift();
    //To not have an undefined returned, create if several indexes use .pop() from sorted array else give the minimum if only 1 element
    const toExtractMax = toSort.length > 0 ? toSort.pop() : toExtractMin;
    
    console.log(`[${toExtractMin}, ${toExtractMax}]`);
}

minMax([1, 2, 3, 4, 5]) //➞ [1, 5]

minMax([2334454, 5]) //➞ [5, 2334454]

minMax([1]) //➞ [1, 1]
minMax([ 1, 44, 87, 65, 9, 32, 2, 8, 76])
// shoot this next one needs an if array is empty condition
minMax([])
*/
//04.EXO
//---------------------------------------------------------------
/*const detectWord = (wordHidden) => {
    let arrayHidden = wordHidden.split('')
    let mysteryToPrint = []

    for (let i=0; i < arrayHidden.length ; i++){
        //si /= entre les 2 arrays 1-originale 2-toutes lettres capitales 
        if (arrayHidden[i] !== arrayHidden[i].toUpperCase()) {
            
            mysteryToPrint.push(arrayHidden[i]);//va nous donner les lettres minuscules et les pousser dans l'array vide mysteryToPrint
            
        } // pas de sinon
    } 
    console.log(mysteryToPrint.join(''));
}

detectWord("UcUNFYGaFYFYGtNUH") //➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") //➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") //➞ "embezzlement"
*/
//05.EXO
//----------------------------------------------------------------------
/*
drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
  ]

const sortDrinkByPrice = drinks.sort(({price: a},{price: b}) => {return a - b});

console.log(sortDrinkByPrice);
/*Expected result 

  sortDrinkByPrice(drinks) ➞ [
    {name: "water", price: 3},
    {name: "coke", price: 8},
    {name: "lemonade", price: 10 },
    {name: "lime" , price: 10},
    {name: "vodka", price: 17},
]*/
//06EXO
//--------------------------------------------------------------------------
/*const animals = (a, b, c) => {
    console.log(a*2 + b*4 + c*4);
}
animals(2, 3, 5) //➞ 36

animals(1, 2, 3) //➞ 22

animals(5, 2, 8) //➞ 50
*/
//07EXO
//--------------------------------------------------------------------------
/*const profitableGamble = (probability, prize, pay) => {
    if (probability*prize > pay)  {
       console.log(true)
    } else {
       console.log(false)
    } 
    
}

profitableGamble(0.2, 50, 9) //➞ true

profitableGamble(0.9, 1, 2) //➞ false

profitableGamble(0.9, 3, 2) //➞ true
*/
//08EXO
//--------------------------------------------------------------------------
/*const frames = (minutes, image) =>{
    console.log((minutes*60)* image);
}
frames(1, 1) //➞ 60

frames(10, 1) //➞ 600

frames(10, 25) //➞ 15000
*/
//09EXO
//---------------------------------------------------------------------------
/*const calculateFuel = (amount) => {
    if (!isNaN(parseInt(amount))> 0){
    if (amount*10 < 100 ) {
        console.log(100)
    } else {
        console.log(10*amount);
    }
} else {
    console.log(`${amount} is not valid`);
}
}

calculateFuel(15) //➞ 150

calculateFuel(true) //➞ 235

calculateFuel(3) //➞ 100
*/