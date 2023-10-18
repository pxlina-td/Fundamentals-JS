function train(array) {
    let wagons = array[0].split(" ");
    let maxCapacity = Number(array[1]);
    for (let i = 2; i < array.length; i++) {
        let command = array[i];
        command = command.split(" ");

        if (command[0] == "Add") {
            wagons.push(command[1]);
        }
        else {
            for (let j = 0; j < wagons.length; j++) {
                let people = Number(wagons[j]);
                let newPeople = Number(command[0]);
                if (people + newPeople <= maxCapacity) {
                    wagons[j] = newPeople + people;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));

}
