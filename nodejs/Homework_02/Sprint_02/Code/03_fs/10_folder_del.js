const fs = require('fs');

// recursive: true — удаляет всё содержимое папки
// force: true — не выбрасывает ошибку, если папка не существует

fs.rm('new_folder', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('del');
});

try {
    fs.rmSync('my_folder_2', { recursive: true, force: true });
    console.log('del');
} catch (err) {
    console.error(err.message);
}