const fs = require('fs')
function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        let data1 = data.trim().split('\n').slice(1)
        data1 = data1.map((line) => line.split(',')[0])
        resolve(data1)
        console.log(data1)
      }
    })
  })
}
readDatabase('../database.csv')
