function employee(arr){
    for(let el of arr){
        let employee={
            name:el,
            number:el.length
        };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
        
    }
}