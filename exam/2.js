function translator(arr) {
        let n = Number(arr.shift());
        for (let el of arr) {
            let regex = /\!(?<com>[A-Z][a-z]{2,})\!:\[(?<str>[A-Za-z]{8,})\]/g;
            let match = regex.exec(el);
            
            if (match) {
                let result = [];
                let string = String(match.groups.str);
                
                for (let i = 0; i < string.length; i++) {
                    let charCode = string.charCodeAt(i);
                    result.push(charCode);
                }
    
                let code = result.join(' ');
                let command = String(match.groups.com);
                console.log(`${command}: ${code}`);
            } else {
                console.log('The message is invalid');
            }
        }
    }


translator(["2",

        "!Send!:[IvanisHere]",

        "*Time@:[Itis5amAlready"])