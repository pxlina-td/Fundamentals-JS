function towns(arr){
    for(let el of arr){
        let tokens= el.split(" | ");
        let obj= {
            town:tokens[0],
            latitude:Number(tokens[1]).toFixed(2),
            longitude:Number(tokens[2]).toFixed(2)
        };
        console.log(obj);
    }
}