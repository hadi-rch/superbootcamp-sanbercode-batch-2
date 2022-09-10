function getPermutations(sentence,word) {        
    var pieces = sentence.split(" ");
    var valid_pcs = [];
    var combinations = [[]];
    var combinations_no_duplicates = [];
    for (var i = 0; i < pieces.length; i++) {
        if (pieces[i].indexOf(word) !== -1)
            valid_pcs.push(pieces[i]);
    }
    for (var i = 0; i < valid_pcs.length; i++) {
        tmp = [];
        for (var j = 0; j < combinations.length; j++) {
            for (var k = 0; k < valid_pcs.length; k++)
                tmp.push(combinations[j].concat(valid_pcs[k]));
        }
        combinations = tmp;
    }
    for (var i = 0; i < combinations.length; i++) {
        const distinct = [...new Set(combinations[i])];
        if (distinct.length == combinations[i].length)
            combinations_no_duplicates.push(combinations[i]);
    }
    return {"word":valid_pcs,"permutations":combinations_no_duplicates};
}

console.log(getPermutations("ABAH", "BAHA"));