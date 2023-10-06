function magic(arr, sum){
    let used=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i]+arr[j]==sum && i!==j){
                if(used.includes(arr[i]) && used.includes(arr[j])){}
                else {console.log(arr[i], arr[j]);
                used.push(arr[i]);
                used.push(arr[j]);}
            }
        }
    }
}
