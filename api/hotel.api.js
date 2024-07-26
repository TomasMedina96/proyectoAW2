import { API } from "./api.JS";

export const HotelsByCity = async(id) =>{

    try {
        const res = await fetch(`${API}/hoteles/all/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        
        return res.json()
    } catch (error) {
        console.log(error)
        return {status:false}
    }
}