function sortArrayByKey(arr, key) {
    // Сортируем массив, не изменяя исходный
    return [...arr].sort((obj1, obj2) => {
        const val1 = obj1[key];
        const val2 = obj2[key];

        // Сравниваем строки и числа
        if (typeof val1 === 'string' && typeof val2 === 'string') {
            return val1.localeCompare(val2); // Сравнение строк по алфавиту
        } else {
            return val1 - val2; // Сравнение чисел
        }
    });
}

const people = [
    { name: 'Dmitry', age: 30 },
    { name: 'Anna', age: 25 },
    { name: 'Boris', age: 35 },
];

const sortedByName = sortArrayByKey(people, 'name');
console.log('Сортировка по имени:');
sortedByName.forEach(person => console.log(`Имя: ${person.name}, Возраст: ${person.age}`));

const sortedByAge = sortArrayByKey(people, 'age');
console.log('Сортировка по возрасту:');
sortedByAge.forEach(person => console.log(`Имя: ${person.name}, Возраст: ${person.age}`));
