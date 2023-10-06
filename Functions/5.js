function palindrome(arr){ 
    let curNum=0;
    let pal=0;
    for (let i = 0; i < arr.length; i++) {
        curNum = arr[i];
        pal=findPal(curNum);
        if(pal==curNum) console.log("true");
        if(pal!==curNum) console.log("false");
    }

    function findPal(curNum){
        let numStr=String(curNum);
        let palNum='';
        for (let j = numStr.length -1; j >=0; j--) {
            palNum+=numStr[j];
        }
        let result= Number(palNum);
        return result;
    }
}
palindrome([123,323,421,121])