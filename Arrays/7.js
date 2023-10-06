function maxSequence(arr){
    let current = [arr[0]];
    let best = [current[0]];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]==arr[i-1]){
            current.push(arr[i]);
        }
        else current=[arr[i]];
        if(current.length>best.length){best=current;}
    }
    let longest =best.join(" ");
    console.log(longest);
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])