function halfAndReverse(input){
    let num= Number((input.length / 2).toFixed(0));
    let [first,second]= [input.substring(0,num),input.substring(num)];
    console.log(first,"\n",second);
}
halfAndReverse('Thisisdifficultthisissoamazing')