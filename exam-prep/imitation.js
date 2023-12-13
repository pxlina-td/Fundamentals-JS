function game(arr) {
        let message = arr.shift();
        let command = arr.shift().split('|');
        while (command[0] != 'Decode') {
                let act = command[0];
                switch (act) {
                        case 'Move':
                                let n = command[1];
                                let prefix = message.substring(0, n);
                                let suffix = message.substring(n);
                                message = suffix + prefix;
                                break;
                        case 'Insert':
                                let value = command[2];
                                let i = Number(command[1]);
                                message = message.substring(0,i) + value + message.substring(i);
                                break;
                        case 'ChangeAll':
                                let match = command[1];
                                let replacement = command[2];
                                message = message.split(match).join(replacement);
                }
                command = arr.shift().split('|');
        }
        console.log(`The decrypted message is: ${message}`);
}
game([
        'zzHe',
        'ChangeAll|z|l',
        'Insert|2|o',
        'Move|3',
        'Decode',
      ]
      )