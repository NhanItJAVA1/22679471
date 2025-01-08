var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;
var markHigherBMI;

function calBMI(mass, height){
    return mass / (height*height);
}
if(calBMI(massMark,heightMark) > calBMI(massJohn,heightJohn)){
    markHigherBMI = true;
    console.log(markHigherBMI);
    console.log("Mark higher than John");
}else{
    markHigherBMI = false;
    console.log(markHigherBMI);
    console.log("John higher than Mark");

}


var massMark1 = 95;
var heightMark1 = 1.88;

var massJohn1 = 85;
var heightJohn1 = 1.76;
if(calBMI(massMark1,heightMark1) > calBMI(massJohn1,heightJohn1)){
    markHigherBMI = true;
    console.log(markHigherBMI);
    console.log("Mark higher than John");
}else{
    markHigherBMI = false;
    console.log(markHigherBMI);
    console.log("John higher than Mark");

}