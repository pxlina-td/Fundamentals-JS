function gladiator(num, helP, swP, shiP, arP){
    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;
    let totalExpenses = 0;

    for (let i = 1; i <= num; i++) {

        if (i % 2 === 0) {
            helmetBroken++;
        }

        if (i % 3 === 0) {
            swordBroken++;
        }
        if (i % 6 === 0) {
            shieldBroken++;
            if (shieldBroken % 2 === 0) {
                armorBroken++;
            }
        }

    }

    totalExpenses = (helmetBroken * helP) +
                   (swordBroken * swP) +
                   (shieldBroken * shiP) +
                   (armorBroken * arP);


    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}
gladiator(7,2,3,4,5);