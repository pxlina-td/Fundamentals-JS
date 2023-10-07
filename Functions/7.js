function nxn(num){
    let um = String(num);
    um+=" ";
    for (let i = 1; i <=num; i++) {
        console.log(um.repeat(num));
    }
}
nxn(5)