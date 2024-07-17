import { API } from "./api.JS";

export const allCiudades = async() =>{

    try {
        const res = await fetch(`${API}/ciudades/all/`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        return res.json()
    } catch (error) {
        console.log(error)
        return {status:false}
    }
}