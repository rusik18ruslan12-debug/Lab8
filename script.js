// --- Проверка четности ---

// Получаем элементы
const input = document.getElementById("numberInput");
const button = document.getElementById("checkBtn");

// Обработчик клика
button.addEventListener("click", function () {
    const number = Number(input.value);

    if (number % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
});


// --- Работа с массивом и циклом ---

// Создаем массив
let numbers = [];

for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

// Выводим список на страницу
const list = document.getElementById("numberList");

for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement("li");
    li.textContent = numbers[i];
    list.appendChild(li);
}
