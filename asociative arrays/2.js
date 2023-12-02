function odd(string){
    let array= string.toLowerCase().split(" ");
    let object={};
    for (let a of array) {
        if(a in object){
            object[a]+=1;
        } else{
            object[a]=1;
        }
    }
    let result=[];
    let entries = Object.entries(object);
    for (let [word, times] of entries) {
        if(times%2!==0){
            result.push(word);
        }
    }
    let finished = result.join(" ");
    console.log(finished);
}