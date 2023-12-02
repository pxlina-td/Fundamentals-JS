function company(arr) {
    let companyEmployees = {};
    for (let line of arr) {
        let [company, id] = line.split(" -> ");

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(id)) {
                companyEmployees[company].push(id);
            }
        } else {
            companyEmployees[company] = [id];
        }
    }
    let entries = Object.entries(companyEmployees).sort((a,b)=> a[0].localeCompare(b[0]));

    for(let [company, ids] of entries){
        console.log(company);
        ids.forEach(id=> console.log(`-- ${id}`));
    }
}