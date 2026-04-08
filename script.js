const input = document.getElementById("numberInput");
const button = document.getElementById("checkBtn");

button.addEventListener("click", function () {
    const number = Number(input.value);

    if (number % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
});

let numbers = [];

for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

const list = document.getElementById("numberList");

for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement("li");
    li.textContent = numbers[i];
    list.appendChild(li);
}
