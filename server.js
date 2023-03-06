const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const createPath = require('./helpers/create-path')

const PostRouter = require('./routes/post-routes')
const ContactRouter = require('./routes/contact-routes')

const app = express()

app.set('view engine', 'ejs')

const PORT = 3000;
const db = 'mongodb+srv://Aslan:236393sr@cluster0.guezpkr.mongodb.net/node-block?retryWrites=true&w=majority'

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected to db'))
    .catch((err) => console.log(err))


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log('server start')
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded({extended: false}))

app.use(express.static('styles'))

app.use(methodOverride('X-HTTP-Method-Override'))

app.get('/', (req, res) => {
    const title = 'Home'

    res.render(createPath('index'), {title})
})

app.use(ContactRouter)
app.use(PostRouter)

app.get('/about-us', (req, res) => {
    res.redirect('contacts', {title})
})

app.use((req, res) => {
    const title = 'Error'

    res
    .render(createPath('error'))
})

