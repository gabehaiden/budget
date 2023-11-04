import bodyParser from 'body-parser'
import express, { json } from 'express'
import UserRouter from './lib/router/UserRouter'

const app = express()
const PORT = 3000

app.use(json())

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/user', UserRouter)

app.listen(PORT, () => console.log(`running on port ${PORT}`))