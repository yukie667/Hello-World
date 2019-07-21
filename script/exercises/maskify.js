// // return masked string
var cardNumber = "4556364607935616"; 
function maskify(cardNumber) {


    // cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
    
    var firstSlice = cardNumber.slice(0,-4);
    var secondSlice = cardNumber.slice(-4);
    var replaced = firstSlice.replace(/./g,"#");

    console.log(replaced + secondSlice);
    return replaced + secondSlice;
}
maskify(cardNumber);
//     // 4556364607935616


//     //slice(start, end)
// var text="excellent"
// text.slice(0,4) //returns "exce"
// text.slice(2,4) //returns "ce"



// var string = "Hello my name is";
// console.log(string.length);

// var string = "Hello my name is";
// console.log(string.charAt(6));

// var first = "Yulia"; 
// var second = first.concat(" Mykytiuk");
// alert(second);



// const hyi = function() {
//     var genitals = "pyzda";
//     console.log(genitals);
// }
// hyi();

// function one(){
//     console.log(5);
// }
// one();


// (function() {
//     var two = "two";
//     console.log(two);
// }());
// // function declaration 
// // function expression 



