function rotation(array, r){
    for (let i = r;i>0 ; i--) {
        let first=array[0];
        array.shift();
        array.push(first);
    }
    console.log(array.join(" "));
}
rotation([51, 47, 32, 61, 21],
    2);