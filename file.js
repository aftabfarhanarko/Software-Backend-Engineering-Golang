const fs = require('fs');

fs.readFile('Documents', 'utf8', (err, data) => {
    if(err){
        console.error("Not  Read File", err);
         return;   
    }
    console.log('File Content:',  data);
    
})


