function pascal(input){
    let regex= /[A-Z]/;
    let arr= input.match(/.{1,1}/g);
    let str="";
    for(let i =0; i<arr.length; i++){
        let el = arr[i];
        if(regex.test(el)){
            arr[i] = str.concat(", ", el)
        }
    }
    input= arr.join("");
    console.log(input.slice(2));
}
pascal("FdFsHfs")