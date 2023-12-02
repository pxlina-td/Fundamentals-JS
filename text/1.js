function reveal(wor, text){
    let words= wor.split(", ");

    for(let word of words){
        let starTemplate= "*".repeat(word.length);
        text = text.replace(starTemplate, word);
    }

    console.log(text);
}