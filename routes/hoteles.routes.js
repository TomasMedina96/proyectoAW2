import {readFile} from 'fs/promises';
//funcion de express para crear rutas y poder exportarlas
import { Router } from "express";


const router = Router()

//lee y trae el archivo
const fileCategories = await readFile('./data/hotel.json','utf-8')
//Lo convierte en JSON.
const categoriesData = JSON.parse(fileCategories)

router.post('/all/',async (req,res) =>{
    try {
        const idCiudad = req.body.id

        const result = await categoriesData.filter(e => e.id == idCiudad)
    
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json('Error en el servidor: ' + error.message);
    }
    
    }
)

export default router;