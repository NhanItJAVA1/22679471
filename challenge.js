var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;
var markHigherBMI;

function calBMI(mass, height){
    return mass / (height*height);
}
function checkBMI(markHigherBMI){
    if(markHigherBMI){
        console.log("Mark's BMI is higher than John's!");
        console.log("Mark's BMI ("+calBMI(massMark,heightMark)+")  is higher than John's BMI("+calBMI(massJohn,heightJohn)+")!");
    }else{
        console.log("John's BMI is higher than Mark's!");
        console.log("John's BMI ("+calBMI(massMark1,heightMark1)+")  is higher than mark's BMI("+calBMI(massJohn1,heightJohn1)+")!");
    }
}

if(calBMI(massMark,heightMark) > calBMI(massJohn,heightJohn)){
    markHigherBMI = true;
}else{
    markHigherBMI = false;
}

checkBMI(markHigherBMI);

if(calBMI(massMark,heightMark) > calBMI(massJohn,heightJohn)){
    markHigherBMI = true;
}else{
    markHigherBMI = false;
}
var massMark1 = 95;
var heightMark1 = 1.88;

var massJohn1 = 85;
var heightJohn1 = 1.76;
if(calBMI(massMark1,heightMark1) > calBMI(massJohn1,heightJohn1)){
    markHigherBMI = true;
}else{
    markHigherBMI = false;
}
checkBMI(markHigherBMI);

