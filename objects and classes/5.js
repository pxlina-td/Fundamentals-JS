function inventory(arr) {
    let heroes = [];
    for (let el of arr) {
        let tokens = el.split(" / ");
        let name = tokens[0];
        let level = tokens[1];
        let items = tokens[2];
        let heroObj = { name: name, level: Number(level), items: items };
        heroes.push(heroObj);
    }
    heroes.sort((a,b) => a.level - b.level);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])