function permute(arr) {
    var result = [];
    if (arr.length === 0) return [];
    if (arr.length === 1) return [arr];

    for (var i = 0; i < arr.length; i++) {
        var currentNum = arr[i];
        var remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
        var remainingNumsPermuted = permute(remainingNums);

        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            var permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    }

    return result;
}

console.log(permute('sas'));