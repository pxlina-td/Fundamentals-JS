function merge(one,two){
    let three=[];
    for (let i = 0; i < one.length; i++) {
        if(i%2==0){
            three.push( Number(one[i])+Number(two[i]));
        }
        else three.push(one[i]+two[i]);
    }
    console.log(three.join(" - "));
}