let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//console.log(ages.length-1);
let x = ages[ages.length-1] - ages[0];
console.log(x);

let ages2 = [3, 9, 23, 73, 64, 2, 8, 28, 93];
//console.log(ages2.length-1);
let y = ages2[ages2.length-1] - ages2[0];
console.log(y);

let ages3 = [3, 9, 23, 73, 64, 2, 8, 28, 93];
let sum = 0;
for(i = 0; i < ages3.length; i++){
sum = sum + ages3[i];
} 
let avg = sum / ages3.length;
console.log(avg);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
sum = 0;
for(i = 0; i < names.length; i++){
    sum = sum + names[i].length;
}
avg = sum / names.length;
console.log(avg);
//console.log(Math.round(avg));
//this will return a whole number
let namesList = "";
for(i = 0; i < names.length; i++){
    namesList = namesList + names[i] + " ";
}
console.log(namesList.trim());

//access the last element of an array
console.log(names[names.length-1]);

//access the first element of the array
console.log(names[0]);

let nameLengths = [];
for(i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}

sum = 0;
for(i = 0; i < nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
console.log(sum);


function z(word, n){
    let words = "";
    for(i = 0; i < n; i++){
    words = words + word;
    }
    return words;
}

//console.log(z("apple", 5));

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

//console.log(fullName("Sam", "Smith"));

function numbers(arr){
    for(i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    }
    if(sum > 100){
        return true;
    }
    return false;
}

//console.log(numbers([14, 32, 16, 84]));

function average(arr){
    for(i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

//console.log(average([14, 32, 16, 84]));

function average2(arr, arry){
    let sum2 = 0;
    for(i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    for(i = 0; i < arry.length; i++){
        sum2 = sum2 + arry[i];
    }
    if(sum > sum2){
        return true;
    } 
    return false;
}

//console.log(average2([14, 32, 16, 84], [14, 32, 66, 85]));

function willBuyDrink(isHotOutside, moneyInPocket){
    if(moneyInPocket > 10.50 && isHotOutside == true){
        return true;
    }
    return false;
}

//console.log(willBuyDrink(true, 76));



/** 
 * Create a function to determine if you are hungry and if the restaurant is still open. 
 * I created this because I just went out to eat.
 * @param {Boolean} isHungry 
 * @param {Number} howLate 
 * @param {Number} time 
 * @returns string
 */
function willEat(isHungry, howLate, time){
    if(isHungry){
        if(howLate >= time){
            return "Yum, let's eat!";
        }
        return "Oh no, it's closed!";
    } else {
        return "I'm not hungry";
    }
}

console.log(willEat(true, 12, 18));
