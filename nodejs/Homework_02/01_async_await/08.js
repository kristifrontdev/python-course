// Task 08

// Проаналізуйте послідовність виконання коду NodeJS.

setTimeout(() => {
  console.log(1);
}, 0);

setImmediate(() => {
  console.log(2);
});

console.log(3);

// 3, 1, 2

// 1. setTimeout и setImmediate относятся к макрозадачам, попадают последовательно в очередь
// 2. Сначала выполнится console.log 3
