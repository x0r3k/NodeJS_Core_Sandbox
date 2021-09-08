const fs = require('fs');
const path = require('path');
const ddlScript = fs.readFileSync(path.join(__dirname, './splitFileContent.sql'));

// split SQL script by semicolon to define separate SQL-instructions
const statements = ddlScript.toString().split(/;\r?\n/);
console.log(statements);