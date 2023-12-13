function zoo(arr) {
        let line = arr.shift();

        let records = {};
        let areas = [];

        while (line != 'EndDay') {
                line = line.split(': ');
                let command = line.shift();
                line = line[0];
                let info = line.split('-');
                switch (command) {
                        case 'Add':
                                let [name, neededFood, area] = info;
                                neededFood = Number(neededFood)

                                if (records.hasOwnProperty(name)) {
                                        records[name].neededFood += Number(neededFood);
                                } else {
                                        records[name] = { neededFood, area };
                                }
                                break;

                        case 'Feed':
                                let food; let name1;
                                [name1, food] = info;
                                if (records.hasOwnProperty(name1)) {
                                        records[name1].neededFood -= Number(food);
                                        if (records[name1].neededFood <= 0) {
                                                console.log(`${name1} was successfully fed`);
                                                delete records[name1];
                                        }
                                }
                                break;
                }
                line = arr.shift();
        }

        console.log('Animals:');
        for (let animal in records) {
                console.log(` ${animal} -> ${records[animal].neededFood}g`);
        }

        console.log('Areas with hungry animals:');

        let areaCount = {};

        
        for (let animal in records) {
                let area = records[animal].area;

                
                areaCount[area] = (areaCount[area] || 0) + 1;
        }


        for (let area in areaCount) {
                console.log(` ${area}: ${areaCount[area]}`);
        }
}

zoo(["Add: Adam-4500-ByTheCreek",

"Add: Maya-7600-WaterfallArea",

"Add: Maya-1230-WaterfallArea",

"Feed: Jamie-2000",

"EndDay"])