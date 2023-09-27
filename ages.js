function ages(age){
if (age>=0 && age<=2) {console.log('baby');}
else if (age>=3 && age<=13) {console.log('child');}
else if (age>=14 && age<=19) {console.log('teenager');}
else if (age>=20 && age<=65) {console.log('adult');}
else if (age>=66) {console.log('elder');}
else {console.log('out of bounds');}
}

function rounding(num, prec){
    if (prec>15) {prec=15;}
    let result = num.toFixed(prec);
    console.log(parseFloat(result));
}

function division(number){
    let x=0;
    if(number%10==0){ console.log('The number is divisible by 10');}
    else if(number%7==0){  console.log('The number is divisible by 7');}
    else if(number%6==0){  console.log('The number is divisible by 6');}
    else if(number%3==0){  console.log('The number is divisible by 3');}
    else if(number%2==0){  console.log('The number is divisible by 2');}
    else {console.log('Not divisible');}
}

function vacation(num, type, day){
    let price=0;
    let total=0;
    if(type=="Students"){
        switch (day) {
            case "Friday":price=8.45; break;
            case "Saturday":price=9.80; break;
            case "Sunday":price=10.46; break;
        }
        total= num*price;
        if (num>=30){total=75%total;}
    }
    else if(type=="Business"){
        switch (day) {
            case "Friday":price=10.90; break;
            case "Saturday":price=15.60; break;
            case "Sunday":price=16; break;
        }
        total= num*price;
        if (num>=100){total=(num-10)*price;}
    }
    else if(type=="Regular"){
        switch (day) {
            case "Friday":price=15; break;
            case "Saturday":price=20; break;
            case "Sunday":price=22.50; break;
        }
        total= num*price;
        if (num>=10 && num<+20){total=95%total;}
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday");