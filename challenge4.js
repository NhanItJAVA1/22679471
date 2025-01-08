var tip;
var bill;
function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

bill = 275;
tip = calculateTip(bill);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

bill = 40;
tip = calculateTip(bill);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

bill = 430;
tip = calculateTip(bill);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);