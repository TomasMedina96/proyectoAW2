import {readFile, writeFile} from 'fs/promises';
//funcion de express para crear rutas y poder exportarlas
import { Router } from "express";


const router = Router()

//lee y trae el archivo
const fileSell = await readFile('./data/sell.json','utf-8')
//Lo convierte en JSON.
const sellData = JSON.parse(fileSell)


router.post('/newsell/',async (req,res) =>{
    try {
        const {nombre, apellido, telefono, email, destino, hotel, huespedes, dias, total} = req.body
        const data = {
            nombre, apellido, telefono, email, destino, hotel, huespedes, dias, total
        }
        sellData.push(data)
        await writeFile('./data/sell.json', JSON.stringify(sellData, null, 2), 'utf-8');
    
        res.status(200).json('VENTA CARGADA CON EXITO')
    } catch (error) {
        res.status(500).json('Error en el servidor: ' + error.message);
    }
    
    }
)

export default router;