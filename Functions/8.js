function checkIfPerfect(number){
    let isPerfect=perfect(number);
    function perfect(number){
        if (number <= 0) {
            return false;
        }

        let aliquotSum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                aliquotSum += i;
            } 
        }
        return aliquotSum === number;
    }
    if(isPerfect)console.log("We have a perfect number!");
    else console.log("It's not so perfect.");
 }
 checkIfPerfect(6)