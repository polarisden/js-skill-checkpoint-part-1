// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products,promotionCode) {
    let price = 0
    for (let each of products) {
        price += each.price * each.quantity
    }
    if (promotionCode === "SALE50") {
        return price * 0.5
    } else if (promotionCode === "SALE20") {
        return price * 0.8
    } else {
        return price
    }
}
console.log(calculateTotalPrice(products,promotionCode))