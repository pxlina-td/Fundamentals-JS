function sortBy2(array) {
    array.sort(function (a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            const lowerA = a.toLowerCase();
            const lowerB = b.toLowerCase();

            if (lowerA < lowerB) {
                return -1;
            } else if (lowerA > lowerB) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    array.forEach(element => {
        console.log(element);
    });
}
sortBy2(['test',
    'Denny',
    'omen',
    'Default'])