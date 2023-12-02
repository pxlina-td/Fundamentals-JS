function parseJSONToDictionary(jsonStrings) {
    const dictionary = {};
  
    jsonStrings.forEach(jsonString => {
      const data = JSON.parse(jsonString);
      Object.keys(data).forEach(term => {
        dictionary[term] = data[term];
      });
    });
  
    const sortedTerms = Object.keys(dictionary).sort();
  
    sortedTerms.forEach(term => {
      const definition = dictionary[term];
      console.log(`Term: ${term} => Definition: ${definition}`);
    });
  }