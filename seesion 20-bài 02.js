let N = +prompt("Nhập số nguyên dương N");
if (N <= 0 || isNaN(N)) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ");
} else {
    console.log("Các số chia hết cho 5 từ 1 đến " + N + " là");
    for (let i = 1; i <= N; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}
