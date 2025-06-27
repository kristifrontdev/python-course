const fs = require('fs');

// Function to get current filenames
// in the directory
let filenames = fs.readdirSync('.');
console.log(filenames);