function bombNumbers(sequence, bombInfo) {
    let [bombNumber, bombPower] = bombInfo;
    let result = 0;

    while (sequence.includes(bombNumber)) {
        let bombIndex = sequence.indexOf(bombNumber);
        let start = Math.max(bombIndex - bombPower, 0);
        let end = Math.min(bombIndex + bombPower, sequence.length - 1);

        for (let i = start; i <= end; i++) {
            sequence.splice(start, 1);
        }
    }

    result = sequence.reduce((acc, current) => acc + current, 0);

    console.log(result);
}