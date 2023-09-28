function isPalindrome(str) {
    str = str.replace(/ /g, "").toLowerCase();
    return str === str.split("").reverse().join("");
}

const input = prompt('Напишите что-нибудь:');
const result = isPalindrome(input);

if (result) {
    console.log('Палиндром');
} else {
    console.log('Не палиндром');
}