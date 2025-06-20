const fs = require('fs');

try {
    const exist = fs.existsSync('new_folder_2');
    if (!exist) fs.mkdirSync('new_folder_2');
}
catch(err) {
    console.log('error');
}