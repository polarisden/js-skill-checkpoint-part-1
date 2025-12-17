// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = Infinity
let minFruit = ''
for (let each of inventory) {
    if (each.quantity < minQuantity) {
        minQuantity = each.quantity
        minFruit = each.name
    }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minFruit} ซึ่งมี ${minQuantity} ชิ้น`)

