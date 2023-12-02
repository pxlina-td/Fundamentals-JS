function partyGuests(input) {
    let guests = {
      regular: [],
      vip: []
    };
  
    let partyStarted = false;
  
    for (let guest of input) {
      if (guest === 'PARTY') {
        partyStarted = true;
        continue;
      }
  
      if (!partyStarted) {
        if (guest[0].match(/\d/)) {
          guests.vip.push(guest);
        } else {
          guests.regular.push(guest);
        }
      } else {
        if (guests.regular.includes(guest)) {
          guests.regular.splice(guests.regular.indexOf(guest), 1);
        } else if (guests.vip.includes(guest)) {
          guests.vip.splice(guests.vip.indexOf(guest), 1);
        }
      }
    }
  
    let allGuests = guests.vip.concat(guests.regular);
    console.log(allGuests.length);
    console.log(allGuests.join('\n'));
  }