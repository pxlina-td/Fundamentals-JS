function find(array){
    let keyWords = array.shift().split(" ");
    let occurences ={};

    for(let word of keyWords){
        occurences[word] = 0;
    }

    for(let el of array){
        if(el in occurences){
            occurences[el]++;
        }
    }

    let entries = Object.entries(occurences).sort((a,b )=> b[1]-a[1]);
    for(let [word, count] of entries){
        console.log(`${word} - ${count}`);
    }
}