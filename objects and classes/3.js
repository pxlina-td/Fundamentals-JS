function store(arr1,arr2){
    let products ={};
    for(let i = 0; i<arr1.length; i+=2){
        let name=arr1[i];
        let qty = Number(arr1[i+1]);

        products[name]=qty;
    }
    for(let i = 0; i<arr2.length; i+=2){
        let name=arr2[i];
        let qty = Number(arr2[i+1]);

        if(name in products){
            products[name]+=qty;
        } else {
            products[name]=qty;
        }
    }
    let kvps= Object.entries(products);

    for(let entry of kvps){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}