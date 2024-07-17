import {readFile} from 'fs/promises';
//funcion de express para crear rutas y poder exportarlas
import { Router } from "express";


const router = Router()

//lee y trae el archivo
const fileCategories = await readFile('./data/ciudades.json','utf-8')
//Lo convierte en JSON.
const categoriesData = JSON.parse(fileCategories)

router.get('/all/',async (req,res) =>{
    try {
        const result = await categoriesData
    
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json('Error en el servidor: ' + error.message);
    }
    
    }
)

export default router;