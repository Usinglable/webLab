// Функция pow, которая возводит x в степень n
function pow(x, n) {
    // Проверяем, является ли n натуральным числом
    if (n < 1 || !Number.isInteger(n)) {
        throw new Error("n должно быть натуральным числом.");
    }

    let result = 1; // Начальное значение результата

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 10));
console.log(pow(3, 4));
console.log(pow(4, 3));
console.log(pow(5, 2));
console.log(pow(10, 1));
