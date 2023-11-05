function exp(input){
        let neededEx=input[0];
        let battles=input[1];
        input.shift();
        input.shift();
        let sum=0;
        let lost=true;
        for (let i = 1; i <= battles; i++) {
                let ep=Number(input[i-1]);
                if(i%15==0){
                        sum=sum+ (1.05*ep);
                }
                else if(i%3==0){
                        sum=sum+ (1.15*ep);
                }
                else if(i%5==0){
                        sum=sum+ (0.9*ep);
                }
                else {sum+=ep;}
                
                if(sum>=neededEx){
                        console.log(`Player successfully collected his needed experience for ${i} battles.`);
                        lost=false;
                        return
                }
        }
        if(lost){
                console.log(`Player was not able to collect the needed experience, ${(neededEx-sum).toFixed(2)} more needed.`);
        }

}
exp([500,

        5,
        
        50,
        
        100,
        
        200,
        
        100,
        
        30])