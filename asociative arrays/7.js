function miner(array){
    let resources = {};
    for (let i = 0; i < array.length; i+=2) {
        let resource = array[i];
        let qty = Number(array[i+1]);
        if (resource in resources){
            resources[resource] += qty;
        } else {
            resources[resource] = qty;
        }
    }

    let entries = Object.entries(resources);
    for(let [resource,qty] of entries){
        console.log(`${resource} -> ${qty}`);
    }
}