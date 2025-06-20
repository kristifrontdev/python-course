// Task 05

// Проаналізуйте послідовність виконання коду JavaScript. Спробуйте передбачіти порядок виконання методом, який показаний на занятті (файл xlsx завантажений у матеріалах заняття).

setTimeout(() => {
  console.log(1);
}, 0);

Promise.resolve().then(() => {
  console.log(2);
  setTimeout(() => {
    console.log(3);
  }, 0);
});

Promise.resolve().then(() => console.log(4));

// 2, 4, 1, 3

// 1. Сначала первый then (2), set timeout (3) закидывается в очередь макротасков после первого сет таймаута (1)
// 2. Выполняется второй then (4)
// 3. Теперь к очереди макротасков, первый сет таймаут это 1 и далее уже 3
