let totalPrice = 5000;
let accountBalance = 4000;
const isVip = false;
const discountRate = 10;
function discountCalculator(discountRate) {
    return function(totalPrice) {
        const discount = totalPrice * (discountRate / 100);
        return totalPrice - discount;
    }
}
const tenPercentOff = discountCalculator(10)
console.log(totalPrice)
console.log(accountBalance)

if (accountBalance >= totalPrice && isVip === false) {
    console.log("Покупка прошла успешно");
    console.log(accountBalance - totalPrice);
} else if (isVip === true) {
    console.log("Для Вас действует скидка 10%");
    console.log(tenPercentOff(totalPrice));
    console.log("Покупка прошла успешно");
console.log(accountBalance - (tenPercentOff(totalPrice)))
} else {
    console.log("Недостаточно средств");
}