const path = require('path')

console.log('Склеить участки пути', path.join(__dirname, 'qwe', 'qwe', 'asd', '..', '..'))
const fullPath = path.resolve('main.js')
console.log(path.parse(fullPath))
console.log(path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute(fullPath))
console.log('Название файла', path.basename(fullPath))
console.log('Название расширения', path.extname(fullPath))

// __________

const siteUrl = 'https://invivo.kz/ru/almaty/'

const url = new URL(siteUrl)

console.log(url)