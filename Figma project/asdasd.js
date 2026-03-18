let juftSon = 0; 
let toqSon = 0;  

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        juftSon += i;
    } else {
        toqSon += i;
    }
}

console.log("Juft sonlar yig'indisi:", juftSon);
console.log("Toq sonlar yig'indisi:", toqSon)

if (juftSon > toqSon) {
    console.log("Juft sonlar yig'indisi katta");
} else if (juftSon < toqSon) {
    console.log("Toq sonlar yig'indisi katta");
} else {
    console.log("Juft va toq sonlar yig'indisi teng");
}