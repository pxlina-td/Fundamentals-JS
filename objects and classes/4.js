function movies(array) {
    let final = [];
    for (let el of array) {
        if (el.includes('addMovie')) {
            let mname = el.split('addMovie ')[1];
            let movieObj = { name: mname };
            final.push(movieObj);
        } else if (el.includes('directedBy')) {
            let [mname, director]= el.split(' directedBy ');
            let movie = final.find(movie => movie.name == mname);
            if(movie){
                movie.director = director;
            }
        } else if (el.includes('onDate')) {
            let [mname, date]= el.split(' onDate ');
            let movie = final.find(movie => movie.name == mname);
            
            if(movie){
                movie.date= date;
            }
        }
    }
    for (let movie of final){
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }
}