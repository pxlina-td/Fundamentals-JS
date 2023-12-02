function piccolo(array){
    let parking=[];
    for (let line of array) {
        let [command, car]= line.split(", ");

        if(command=="IN"){
            parking.push(car);
        }
        if(command=="OUT"){
            let i=parking.indexOf(car);
            parking.splice(i,1);
        }
    }

parking.sort((a,b) => a.slice(2,6)- b.slice(2,6));


    if(parking.length>0){
        parking.forEach(x=> console.log(x));
    } else{
        console.log( "Parking Lot is Empty");
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])