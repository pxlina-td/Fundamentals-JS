function hogwarts(arr) {
        let spell = arr.shift();
        let command = arr.shift();
        while (command != 'Abracadabra') {
                command = command.split(' ');
                let cast = command.shift();
                switch (cast) {
                        case 'Abjuration':
                                spell = spell.toUpperCase();
                                console.log(spell);
                                break;
                        case 'Necromancy':
                                spell = spell.toLowerCase();
                                console.log(spell);
                                break;
                        case 'Illusion':
                                let i = Number(command.shift());
                                let letter = command.shift();
                                if (i >= spell.length || i < 0) {
                                        console.log('The spell was too weak.');
                                } else {
                                        spell = spell.substring(0, i) + letter + spell.substring(i+1);
                                        console.log('Done!');
                                }
                                break;
                        case 'Divination':
                                let match = command.shift();
                                let replacement = command.shift();
                                if(spell.includes(match)){
                                        spell = spell.split(match).join(replacement);
                                        console.log(spell);
                                } else{}
                                break;
                        case 'Alteration':
                                let sub= command.shift();
                                if(spell.includes(sub)){
                                        spell=spell.split(sub).join('');
                                        console.log(spell);
                                } else{}
                                break;
                        default:
                                console.log('The spell did not work!');
                                break;
                }


                command = arr.shift();
        }
}
hogwarts(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Divination d l",
"Alteration master",
"Abracadabra"])