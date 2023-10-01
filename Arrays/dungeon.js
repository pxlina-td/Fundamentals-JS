function dungeons(rooms){
    rooms=String(rooms);
    const arr= rooms.split("|");

    let health=100;
    let coins=0;

    for(let r=0; r<arr.length;r++){
        let room=arr[r];
        room= String(room);
        const inside= room.split(" ");
        
        let x= String(inside[0]);
        let count = Number(inside[1]);
        var isFinished=false;
        let healed=0;

        switch (x) {
            case "potion":
                if(health+count > 100){healed=100-health; health=100;}
                else {health= health+count; healed=count;}
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins+=count;
                console.log( `You found ${count} coins.`);
                break;
            default:
                health= health-count;
                if(health>0){
                    console.log(`You slayed ${x}.`);
                }
                else {
                    console.log( `You died! Killed by ${x}.`);
                    console.log(`Best room: ${r+1}`);
                    return;
                }
                break;
        }
        if(r==arr.length-1){isFinished=true;}
    }
    if(isFinished){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeons(["chest 96|chest 40|SpagettiMonster 22|potion 10|chest 34|Kronos 40|potion 20|Crocs 35|potion 40|chest 1|Vegeta 50|potion 1|chest 0|SpearGoblin 7|Goblin 5|potion 60|Pig 60"]);