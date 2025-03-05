let str = prompt("Nhập chuỗi bạn muốn tìm kiếm:");
let sea = prompt("Nhập ký tự bạn muốn tìm kiếm:");
let found = false;
let i = 0;
while (i < str.length) {
    if (str[i] === sea) {
        found = true;
        break;
    }
    i++;
}
if (found) {
    document.write(`Ký tự '${sea}' tồn tại trong chuỗi.`);
} else {
    document.write(`Ký tự '${sea}' không tồn tại trong chuỗi.`);
}
