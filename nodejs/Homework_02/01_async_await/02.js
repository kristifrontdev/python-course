// Task 02

// Проаналізуйте послідовність виконання коду JavaScript. Спробуйте передбачіти порядок виконання методом, який показаний на занятті (файл xlsx завантажений у матеріалах заняття).

console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => console.log(3));
}, 0);

Promise.resolve().then(() => console.log(4));

console.log(5);

// 1, 5, 4, 2, 3

// 1. Первым отработает синхронный код console.log(1), console.log(5)
// 2. Далее выполнится promise, так как он находится в очереди console.log(4)
// 3. Последним выполнится setTimeout так как он по приоритету находится в макротасках и исполняется после микротасков
// 4. В setTimeout выполнится консоль лог 2, далее уже then
