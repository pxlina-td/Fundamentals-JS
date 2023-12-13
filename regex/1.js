function furniture(input) {
        let line = input.shift();
        let total = 0;
        let bought = [];
        let i = 1;
        while (line != 'Purchase') {
                let regex = />>(?<name>[A-Z][A-za-z]+)<<(?<price>\d+\.*\d+)!(?<qty>\d+)/;
                let match = line.match(regex);
                if (match) {
                        let { name, price, qty } = match.groups;
                        let tprice= Number(qty) * Number(price);
                        total+=tprice;
                        bought.push(name);
                }


                line = input.shift();
        }

        console.log('Bought furniture:');
        if(bought.length >0){
                console.log(bought.join('\n'));
        }
        console.log(`Total money spend: ${total.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
        '>>TV<<300!5',
        '>Invalid<<!5',
        'Purchase'])