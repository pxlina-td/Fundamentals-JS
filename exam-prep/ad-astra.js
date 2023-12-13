function space(arr){
        let text= arr.shift();
        let regex = /(\||\#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;
        let matches = text.matchAll(regex);
        let tCals=0;
        let food=[];
        for(let el of matches){
                let name = el.groups.name;
                let date = el.groups.date;
                let cals= Number(el.groups.cal);
                tCals+=cals;
                food.push(name, date, cals);
        }
        let days= Math.floor(tCals/2000);
        console.log(`You have food to last you for: ${days} days!`);
        for (let i = 0; i < food.length; i+=3) {
                console.log(`Item: ${food[i]}, Best before: ${food[i+1]}, Nutrition: ${food[i+2]}`);
        }
}
space([
        '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
        ]
        )