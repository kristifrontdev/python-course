const fs = require('fs');


fs.access('new_folder', fs.constants.F_OK, (err) => {
    if (err) {
        // Папки нет — создаём
        fs.mkdir('new_folder', (err) => {
            if (err) throw err;
            console.log('folder was created');
        });
    } else {
        console.log('folder already exists');
    }
});