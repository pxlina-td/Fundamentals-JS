function repeated(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let el1 = array[i];
            let el2 = array[j];
            if (el1 == el2) {
                array.splice(j, 1);
            }
        }
    }
    console.log(array.join(" "));
}
//function removeDuplicates(arr) {
//    const uniqueArray = [...new Set(arr)]; //creates a new array with only the unique (not repeating) elements of the given starting array
//    console.log(uniqueArray.join(" "));
//}