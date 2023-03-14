const fs = require('fs')
const path = require('path')

// console.log('start')

// fs.mkdir(path.resolve('pap'), (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }

//     console.log('Папка создана')
// })

// console.log('end')

// fs.rmdir(path.resolve(__dirname, 'pap'), (err) => {
//     if (err) {
//         throw err
//     }
// })


// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'qwe asd zxc', (err) => {
//     if (err) {
//         throw err
//         return
//     }
//     console.log('Файл записан')
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), 'Добавили залупу', (err) => {
//         if (err) {
//             throw err
//         } else {
//             console.log('Добавили надпись')
//             fs.appendFile(path.resolve(__dirname, 'text.txt'), 'Добавили залупу yjde.', (err) => {
//                 if (err) {
//                     throw err
//                 } else {
//                     console.log('Добавили надпись')
//                 }
//             })
//         }
//     })
// })
 
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data,  (err) => {
        if (err) {
            console.log(123)
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileSync = async(path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            console.log(345)
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async(path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            throw err
        }
        resolve(data)
    }))
}

const removeFileAsync = async(path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message)
        }
        return resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
//     .then(() => appendFileSync(path.resolve(__dirname, 'text.txt'), '123'))
//     .then(() => appendFileSync(path.resolve(__dirname, 'text.txt'), '456'))
//     .then(() => appendFileSync(path.resolve(__dirname, 'text.txt'), '789'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'text.txt'))
//     .then(() => console.log('file was removed'))

// const text = process.env.TEXT || 'new text'


// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then((data) => {
//         const arrData = data.split(' ').length + 1
//         console.log(arrData)
//         return data
//     })
//     .then(data => writeFileAsync(path.resolve(__dirname, 'text2.txt'), data))


