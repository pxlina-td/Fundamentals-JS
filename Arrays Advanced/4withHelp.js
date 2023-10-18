function sortAlternate(arr) {
    let result = [];
    arr.sort(function(a, b) {
      return b - a;
    });
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
      result.push(arr[i]);
      if (i !== j) {
        result.push(arr[j]);
      }
    }
    console.log(result.join(" "));
  }