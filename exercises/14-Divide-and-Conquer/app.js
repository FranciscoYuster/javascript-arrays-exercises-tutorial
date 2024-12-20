let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList (item) {
    let odd = [];
    let even = [];

    for (let i = 0; i < item.length; i++){
        if (item[i] % 2 === 0) {
            even.push(item[i]);
        } else {
            odd.push(item[i]);
        }
    }

    return odd.concat(even);
}

console.log(mergeTwoList(listOfNumbers))