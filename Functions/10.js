//function factorials(num1, num2){
//    function findEm(number){
//        let factor=number;
//        for (let i = number-1; i >1; i--) {
//            factor= factor*i;
//        }
//        return factor;
//    }
//    num1=findEm(num1);
//    num2=findEm(num2);
//    let result=num1/num2;
//    console.log(result.toFixed(2));
//}

function cal(num1, num2) {
    const factorial1 = factorial(num1);
    const factorial2 = factorial(num2);

    function factorial(n) {
        if (n === 0 || n === 1) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
      }

      const divisionResult = factorial1 / factorial2;
      console.log(divisionResult.toFixed(2));
}
cal(5,3)