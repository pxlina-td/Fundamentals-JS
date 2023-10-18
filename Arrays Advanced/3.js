function party(array) {
    let list = [];
    for (let i = 0; i < array.length; i++) {
        let input = array[i].split(" ");
        if (input.length == 3) {
            if (list.includes(input[0])) {
                console.log(`${input[0]} is already in the list!`);
            }
            else {
                list.push(input[0]);
            }
        }
        if (input.length == 4) {
            if (list.includes(input[0])) {
                let index = list.indexOf(input[0]);
                list.splice(index, 1);
            }
            else {
                console.log(`${input[0]} is not in the list!`);
            }
        }
    }
    for (let k = 0; k < list.length; k++) {
        console.log(list[k]);
    }
}
