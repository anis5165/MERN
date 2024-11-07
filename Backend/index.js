const  express = require('express');
const app = express();
const port = 5000
const cors = require('cors')
// app.get('/',(req,res) => {
//     res.send('hello world')
// })

// app.get('/product',(req,res) => {
//     res.send('product page')
// })

const UserRouter = require('./routers/user')
const ProductRouter = require('./routers/product')
// middleware
 app.use(express.json())
 app.use(cors({
    origin: ['http://localhost:3001']
 }))
 app.use('/user' , UserRouter)
 app.use('/product' , ProductRouter)

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})