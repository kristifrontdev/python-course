// Task 07

// Проаналізуйте послідовність виконання коду NodeJS.

process.nextTick(() => {
  console.log(1);
});

Promise.resolve().then(() => {
  console.log(2);
});

console.log(3);

// 3, 1, 2

// 1. next tick позволяет установить приоритет выполнения кода
// 2. выполняется синхронный console.log (3)
// 3. далее выполнится next tick так как он первый в очереди и затем then
