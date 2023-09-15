//dz1
var massiv =[123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
var newMassiv = [];

for (const num of  massiv) {
    const numStr = num.toString()
    if (numStr.startsWith('2') || numStr.startsWith('5')){newMassiv.push(num)}
}
console.log(newMassiv)

//dz2
function dataType (input){
    return typeof input
}
console.log(dataType(40))

//dz3
const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
const tagCounts = {};
for (const tag of tags) {
    if (tagCounts[tag]) {
        tagCounts[tag] += 1;
    } else {
        tagCounts[tag] = 1;
    }
}
console.log(tagCounts);