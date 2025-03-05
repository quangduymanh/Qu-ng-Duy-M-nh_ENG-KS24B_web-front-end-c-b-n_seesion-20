let n = +prompt("Nhập số lượng số Fibonacci cần hiển thị:");
let num2= 1, num3 = 1;
let fibonacci = "";
for (let i = 0; i < n; i++) {
    fibonacci += num2+ " ";
    let next = num2+ num3;
    num2= num3;
    num3 = next;
}
document.write(`Dãy Fibonacci (${n} số đầu tiên): ` + fibonacci);
