// Task 06

// Проаналізуйте послідовність виконання коду JavaScript. Спробуйте передбачіти порядок виконання методом, який показаний на занятті (файл xlsx завантажений у матеріалах заняття).

setTimeout(() => console.log(1), 0);

Promise.resolve().then(() => console.log(2));

console.log(3);

// 3, 2, 1

// 1. Сначала выполнится синхронный console.log (3)
// 2. Далее выполнится then по приоритету, и уже после него setTimeout
