function oddAndEven(input){
    let inputStr= String(input);
    let odd=0;
    let even=0;
    for (let i = 0; i < inputStr.length; i++) {
        let num=Number(inputStr[i]);
        if(num%2==0)even+=num;
        else odd+=num;
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
