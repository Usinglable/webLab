function cesarCipher(text, shift, action) {
    const alphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';
    const alphabetLength = alphabet.length;

    // Приводим сдвиг к диапазону от 0 до длины алфавита - 1
    shift = ((shift % alphabetLength) + alphabetLength) % alphabetLength;

    let result = ''; // Инициализируем пустую строку для результата

    for (const char of text) {
        // Проверяем, присутствует ли символ в алфавите
        const index = alphabet.indexOf(char.toLowerCase());
        if (index === -1) {
            // Если символ не из алфавита (например, пробелы или знаки препинания), добавляем его как есть
            result += char;
        } else {
            let newIndex;
            if (action === 'encode') {
                newIndex = (index + shift) % alphabetLength;
            } else if (action === 'decode') {
                newIndex = (index - shift + alphabetLength) % alphabetLength;
            } else {
                throw new Error("Некорректное действие. Выберите 'encode' или 'decode'.");
            }

            // Сохраняем регистр символа
            const newChar = alphabet[newIndex];
            result += char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
        }
    }

    return result;
}

// Пример использования функции для дешифровки
const decodedMessage = cesarCipher("чздуэ чщцущ", 5, 'decode'); // Дешифруем сообщение
console.log(decodedMessage);
