// Task 03

// Проаналізуйте послідовність виконання коду JavaScript. Спробуйте передбачіти порядок виконання методом, який показаний на занятті (файл xlsx завантажений у матеріалах заняття).

console.log(1);

setTimeout(() => {
  console.log(2);
  new Promise((resolve) => {
    console.log(3);
    resolve();
  }).then(() => console.log(4));
}, 0);

new Promise((resolve) => {
  console.log(5);
  resolve();
}).then(() => console.log(6));

console.log(7);

// 1, 5, 7, 6, 2, 3, 4

// 1. По порядку сначала первый console log (1)
// 2. Далее выполнится console.log(5) в промисе, и после console.log(7)
// 3. console.log(6) в промисе попал в очередь микротасков, теперь его очередь так как это приоритетнее чем setTimeout
// 4. Далее выполнится setTimeout, и в нем сначала console.log(2), затем console.log(3) в промисе, и после then
