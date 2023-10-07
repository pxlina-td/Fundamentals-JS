function passwordCheck(password){
    let isOk1=checkLength(password);
    let isOk2=checkConsists(password);
    let isOk3=checkDigits(password);

    function checkLength(password){
        if(password.length>=6 && password.length<=10)return true;
        else {console.log("Password must be between 6 and 10 characters");}
        return false;
    }
    function checkConsists(password){
        let count1=0;
        for(let el of password){
            let code = el.charCodeAt(0);

            if(
                (code>=48 && code<=57) ||
                (code>=65 && code<=90) ||
                (code>=97 && code<=122)
            ){
                count1++;
            }
            else {console.log("Password must consist only of letters and digits"); return false;}

            if(count1==password.length){return true;}
        }
    }
    function checkDigits(password){
        let count=0;
        for(let el of password){
            let code = el.charCodeAt(0);
            if(code>=48 && code<=57){
                count++;
            }
        }
        if(count>=2){return true;}
        else {console.log("Password must have at least 2 digits");return false;}
    }

    if(isOk1==true && isOk2==true && isOk3==true){
        console.log("Password is valid");
    }

}
passwordCheck("MyPass123")