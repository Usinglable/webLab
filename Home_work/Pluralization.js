function pluralizeFiles(n) {
    let word;

    if (n % 10 === 1 && n % 100 !== 11) {
        word = "файл"; 
    } else if ((n % 10 >= 2 && n % 10 <= 4) && (n % 100 < 12 || n % 100 > 14)) {
        word = "файла"; 
    } else {
        word = "файлов"; 
    }

    return `На вашем устройстве обнаружено ${n} ${word}`;
}
console.log(pluralizeFiles(1));
console.log(pluralizeFiles(3));
console.log(pluralizeFiles(12));
console.log(pluralizeFiles(25));
console.log(pluralizeFiles(101));
