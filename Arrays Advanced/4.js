function sort(array) {
    array.sort(compareFn);
    let final = [];
    for (let i = 0; i < array.length / 2; i++) {
        final.push(array[array.length - (i + 1)]);
        if(i !== array.length - (i + 1)){
            final.push(array[i]);
        }
    }
    console.log(final.join(" "));
    function compareFn(a, b) {
        return a - b;
    }
}
//YES FINALLY AFTER AN HOUR ITS 100% OMFG FUCKING HELL I HATE THIS SHIT ITS 2AM