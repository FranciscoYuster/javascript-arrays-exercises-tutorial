let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let wikiwoko = function(item){
    return item === 1 ? "wiki" : "woko";
}

console.log(theBools.map(wikiwoko))