function charInRange(char1, char2){
    let c1=char1.charCodeAt(0);
    let c2=char2.charCodeAt(0);
    let minCode=Math.min(c1,c2);
    let maxCode=Math.max(c1,c2);  
    let result='';

    for(let i=minCode+1; i<maxCode; i++){
        var curChar=String.fromCharCode(i);
        result+= curChar + ' ';
    }
    console.log(result);
}