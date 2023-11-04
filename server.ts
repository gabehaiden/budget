import bodyParser from 'body-parser'
import express, { json } from 'express'
import ProductRouter from './lib/router/productRouter'
import UserRouter from './lib/router/userRouter'

const app = express()
const PORT = 3000

app.use(json())

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/user', UserRouter)
app.use('/product', ProductRouter)

app.listen(PORT, () => console.log(`running on port ${PORT}`))