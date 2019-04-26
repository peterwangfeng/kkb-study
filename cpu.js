

// // const cpu = require('cpu-stat')
// // const os = require('os')
// // cpu.usagePercent((err, percent) => {
// //     if (!err) {
// //         console.log(percent)
// //     }
// // })

// // console.log(os.freemem / os.totalmem, '--')


// const { promisify } = require('util')
// const { promises } = require('fs')
// // promisify(readFile)('./package.json', 'utf8').then(res => console.log(res))
// promises.readFile('./package.json', 'utf8').then(res => console.log(res)).then(res => {
//     console.log(res)
//     return promises.readFile('./package-lock.json')
// }
// ).then(res => console.log(res.toString()))



// console.log(123)



const fs = require('fs')
fs.createReadStream('./package-lock.json').pipe(fs.createWriteStream('./1.txt'))