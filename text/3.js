function extract(path){
    let file = path.split("\\").pop();
    let lastDotIndex= file.lastIndexOf(".");
    let fileName= file.slice(0,lastDotIndex);
    let fileType = file.slice(lastDotIndex+1);

    console.log("File name:",fileName);
    console.log( "File extension:",fileType);
}