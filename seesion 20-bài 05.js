let a = +prompt("Nhập số cơ số (A):");
let b = +prompt("Nhập số mũ (B):");
let result = 1;
for (let i = 0; i < b; i++) {
    result *= a;
}
document.write(`${a}^${b} = ${result}`);
