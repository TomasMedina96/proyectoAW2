import express from 'express'
import cors from 'cors'
import ciudadesRouter from './routes/ciudades.routes.js'
import sellRouter from './routes/sell.routes.js'



const app = express()

const port = 3000 
app.use(express.json());

app.listen(port, () => {

    console.log(`Servidor levantado en puerto ${port}`)
})

app.use(cors({
    origin: 'http://127.0.0.1:5501'

}))

app.use('/ciudades', ciudadesRouter)
app.use('/sell', sellRouter)

