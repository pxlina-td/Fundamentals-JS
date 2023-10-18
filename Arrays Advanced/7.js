function find(array, commands){
    let [nTake, nDelete, searched] = commands;
    let newArr= [];
    for (let i = 0; i < nTake; i++) {
        newArr.push(array[i]);
    }
    for (let j = 0; j < nDelete; j++) {
        newArr.shift();
    }
    let count = 0;

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searched) {
            count++;
        }
    }
    console.log(`Number ${searched} occurs ${count} times.`);
}