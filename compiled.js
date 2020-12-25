const fs = require('fs')
const path = require('path')
let file = path.resolve(__dirname, 'compiled')
let data = {
    a: Math.random()
}
fs.writeFile(file, JSON.stringify(data, null, 4), { encoding: 'utf8' }, err => {})
console.log("updated");