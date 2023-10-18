function shoping(input) {
        let list = input[0].split("!");
        for (let i = 1; i < input.length-1; i++) {
                let line = input[i].split(" ");
                let command = line[0];
                let ingredient = line[1];

                let isOn = true;

                if (list.includes(ingredient)) isOn = true;
                else isOn = false;

                switch (command) {
                        case "Urgent":
                                if (isOn) break;
                                else {list.unshift(ingredient); break;}
                        case "Unnecessary":
                                if (isOn) {
                                        let index = list.indexOf(ingredient);
                                        list.splice(index, 1);
                                        break;
                                }
                                else break;
                        case "Correct":
                                if (isOn) {
                                        let newItem = line[2];
                                        let index = list.indexOf(ingredient);
                                        list.splice(index, 1, newItem);
                                        break;
                                }
                                else break;
                        case "Rearrange":
                                if (isOn) {
                                        let index = list.indexOf(ingredient);
                                        list.splice(index, 1);
                                        list.push(ingredient);
                                        break;
                                }
                                else break;
                }

        }
        console.log(list.join(", "));
}
shoping(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes","Correct Tomatoes Potatoes",
"Go Shopping!"])


