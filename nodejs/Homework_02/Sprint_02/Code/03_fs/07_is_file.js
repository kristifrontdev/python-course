const fs = require('fs');

//! Sync
try {
    const stats = fs.statSync('03_append_sync.js');

    if (stats.isFile()) {
        console.log('file');
    }
    else if (stats.isDirectory()) {
        console.log('folder');
    }
    else {
        console.log('else');
    }
}
catch (err) {
    console.log(err);
}

//! Async

fs.stat('03_append_sync.js', (err, stats) => {
    if (err) {
        return console.error('Ошибка:', err);
    }

    if (stats.isFile()) {
        console.log('file');
    } else if (stats.isDirectory()) {
        console.log('folder');
    } else {
        console.log('else');
    }
});
