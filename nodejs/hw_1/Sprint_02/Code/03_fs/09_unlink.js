const fs = require('fs');

fs.unlink('new_file.txt', (err) => {
  if (err) console.error(err);
  console.log('del');
});

try {
  fs.unlinkSync('new_file_2.txt');
  console.log('del');
} catch (err) {
  console.error(err.message);
}