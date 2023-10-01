function compare(one,two){
    for(let i=0; i<one.length; i++){
        for (let j = 0; j < two.length; j++) {
            if (one[i]==two[j] && one[i]===two[j]) {
                console.log(one[i]); 
            }
        }
    }
}