let number = +prompt("Nhập vào một số nguyên");
let number1 = number;
let number2 = 0;
if (isNaN(number)) {
    console.log("Vui lòng nhập một số nguyên hợp lệ");
} else {
    for (; number > 0; number = Math.floor(number / 10)) {
        number2 = number2 * 10 + (number % 10);
    }
    console.log(number1 === number2? number1 + " là số đối xứng.": number1 + " không phải là số đối xứng.");
}
