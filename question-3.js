// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    let lengthStr = userPassword.length
    if (lengthStr > 10) {
        return "Strong"
    } else if (lengthStr >= 6) {
        return "Medium"
    } else {
        return "Weak"
    }
}

userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword)); // "Strong"

userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword)); // "Medium"

userPassword = "abcde"
console.log(checkPasswordStrength(userPassword)); // "Weak"