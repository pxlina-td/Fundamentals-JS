function chat(input) {
        let chat= [];
        let line;
        let command;
        let array = input;
        for (let i = 0; i < array.length; i++) {
                line = array[i].split(" ");
                command = line[0];
                switch (command) {
                        case "Chat":
                                chat.push(line[1]);
                                break;
                        case "Delete":
                                if (chat.includes(line[1])) {
                                        let index = chat.indexOf(line[1]);
                                        chat.splice(index, 1);
                                }
                                break;
                        case "Edit":
                                if (chat.includes(line[1])) {
                                        let index = chat.indexOf(line[1]);
                                        chat[index]=line[2];
                                }
                                break;
                        case "Pin":
                                if (chat.includes(line[1])) {
                                        let index = chat.indexOf(line[1]);
                                        let el = chat[index];
                                        chat.splice(index, 1);
                                        chat.push(el);
                                }
                                break;
                        case "Spam":
                                for (let i = 1; i < line.length; i++) {
                                        let element = line[i];
                                        chat.push(element);
                                }
                                break;
                        case "end":
                                break;
                }

        }
        for (let j = 0; j < chat.length; j++) {
                let message = chat[j];
                console.log(message);

        }
}

chat(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])