const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./subfolder/test.txt', 'utf8', (err, result)=>{
    if(err){
        console.error(err);
        return -1
    }
    const first = result;

    readFile('./subfolder/anotherSubFolder/anotherTest.txt', 'utf8', (err, result)=>{
        if(err){
            console.error(err);
            return -1
        }
        const second = result;

        writeFile(
            './subfolder/write-async.txt',
            `Dem, check this shit out: ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.error(err);
                    return -1
                }
                console.log('done with this shit fam')
                return 0
            });
    });
});
console.log('starting next task - big stonks')