function loadingBar(num){
    let dots=0
    let precent='';
    let dot='';
    if(num==100){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
    else {
        dots=(100-num)/10;
        precent="%".repeat(num/10);
        dot=".".repeat(dots);
        console.log(`${num}% [${precent}${dot}]`);
        console.log("Still loading...");
    }
}
loadingBar(10)