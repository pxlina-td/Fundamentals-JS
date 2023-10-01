function max(array){
    let result=[];
    for(let i=0; i<array.length;i++){
        let top=true;
        for(let j=i+1;j<array.length;j++){
            if(array[j]>=array[i]){
                top=false;
                break;
            }
        }
        if(top){
            result.push(array[i]);
        }
    }
    console.log(result.join(" "));
}
max([1,4,3,2])