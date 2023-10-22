function titan(input) {
        let fuel = Number(input[1]);
        let ammo = Number(input[2]);
        str=input[0];
        let array = str.split("||");
     
        for (let i = 0; i < array.length; i++) {
                let line = array[i].split(" ");
                let command = line[0];
                switch (command) {
                        case "Travel":
                                let lYears = Number(line[1]);
                                if (fuel >= lYears) {
                                        fuel -= lYears;
                                        console.log(`The spaceship travelled ${lYears} light-years.`);
                                }
                                else {
                                        console.log("Mission failed.");
                                        return
                                }
                                break;
                        case "Enemy":
                                let enemyP = Number(line[1]);
                                if (ammo >= enemyP) {
                                        ammo -= enemyP;
                                        console.log(`An enemy with ${enemyP} armour is defeated.`);
                                }
                                else {
                                        if (fuel >= (enemyP * 2)) {
                                                fuel -= enemyP * 2;
                                                console.log(`An enemy with ${enemyP} armour is outmaneuvered.`);
                                        }
                                        else {
                                                console.log("Mission failed.");
                                                return;
                                        }
                                }
                                break;
                        case "Repair":
                                let add = Number(line[1]);
                                fuel += add;
                                ammo += add * 2;
                                console.log(`Ammunitions added: ${add * 2}.`);
                                console.log(`Fuel added: ${add}.`);
                                break;
                        case "Titan":
                                console.log("You have reached Titan, all passengers are safe.");
                                return
                }
        }
}
titan(['Travel 10||Enemy 30||Repair 15||Titan',
'50',
'80'])
