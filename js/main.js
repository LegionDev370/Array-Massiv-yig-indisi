const array = [];
let user = Number(prompt("Arrayga nechta son qo'shmoqchisiz"));
for (let i = 1; i <= user; i++) {
    let user2 = Number(prompt(i + " " + "sondi kiriting"));
    array.push(user2);
}
let arraySumm = 0;
for (let z = 0; z < array.length; z++){
    let arrayValue = array[z];
    arraySumm += arrayValue;
}
alert("Massiv yig'indisi:" + " " + arraySumm + "ga teng")