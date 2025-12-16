const fileSize = 5000;
const isPremium = true;
let status = "Загружаем файл!..";
console.log(status);
if (fileSize === 0) {
    console.log("Файл пуст");
} else if (fileSize > 5000 && isPremium) {
    console.log("Файл слишком большой! или подписка отсутсвует");
} else {
    console.log("Загружем...");
    status = ("Файл успешно загружен!");
}
console.log(status);