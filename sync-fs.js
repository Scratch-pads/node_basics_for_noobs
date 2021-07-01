const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./subfolder/test.txt', 'utf8');
const second = readFileSync('./subfolder/anotherSubFolder/anotherTest.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync(
    './subfolder/writeSyncTest.txt',
    `\n kurwa jest w pyte`,
    {flag: 'a'}
)


