function cards(array){
    let peopleCards={};

    let powerValues = { 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 
        J:11, Q:12, K:13, A:14};
    let typesValues = {S:4, H:3, D:2, C:1};

    for (let i = 0; i < array.length; i++) {
        let [name, cardsStr] = array[i].split(": ");
        let cards = cardsStr.split(", ");
       
        if(name in peopleCards){
            peopleCards[name].push(...cards)
        } else{
            peopleCards[name] = cards;
        }
    }

    let entries =Object.entries(peopleCards);
    for(let [name, deck] of entries){
        let uDeck = new Set(deck);
        let deckValue= 0;


        for(let card of uDeck){
            let power= card.slice(0, card.length-1);
            let type= card[card.length-1];

            let cardValue = powerValues[power]*typesValues[type];
            deckValue += cardValue;
        }
        console.log(`${name}: ${deckValue}`);
    }

}