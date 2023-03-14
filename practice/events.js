const Emitter = require('events')

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
    console.log(`Первое сообщение: ${data}`)
    console.log(`Второе сообщение: ${second}`)
})

const MESSAGE = process.env.message || 'qwe'

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'Вы не указали сообщение')
}
