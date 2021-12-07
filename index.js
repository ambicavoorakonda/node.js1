const fs= require('fs')
const inputTxt=fs.readFileSync('./info.txt', 'utf-8')
console.log(inputTxt)
const outputTxt="This is output text: ${inputTxt}. \nCreated on ${`Date.now()`}"
fs.readFile('./info.txt', 'utf-8', (err, data) =>{
    fs.writeFile('./output.txt', 'utf-8', (err, data1) =>{
        console.log('File has been succesfully written')
    })
})
