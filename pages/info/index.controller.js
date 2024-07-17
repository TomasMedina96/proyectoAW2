import { navbar } from '../../components/navbar.js'
import { allCiudades } from '../../api/ciudades.api.js'
const header = document.getElementById('header')
header.innerHTML = navbar()

const btn = document.getElementById('btnTravel')
const totalP = document.getElementById('total')
const hotelSelect = document.getElementById('hotel')
const inputCant = document.getElementById('cant')
const inputDays = document.getElementById('days')
const selectedCity = JSON.parse(localStorage.getItem('selectedCity'))
let city = []
const getTotal = () => {
    const cant = inputCant.value 
    const days = inputDays.value 
    const selectedHotel = city.hotels.find(hotel => hotel.name === hotelSelect.value)
    
    if(cant > 0 && days > 0){
    totalP.textContent = `$${cant * days * selectedHotel.price + city.price}`
    }

}

btn.addEventListener('click', () => {
    const data = {
        city: city,
        hotel: hotelSelect.value,
        cant: inputCant.value,
        days: inputDays.value,
        total: totalP.textContent
    }
    if(data.cant > 0 && data.days > 0){
        localStorage.setItem('summary', JSON.stringify(data))
        window.location.href = '../summary/'
    }
    else{
        alert('Hay datos erroneos o incompletos')
    }

})

document.addEventListener('DOMContentLoaded', async()=>{
   
    const data = await allCiudades()//Deberia ser un array de objetos con la informacion de las ciudades
 
    city = data.find(city => city.id === selectedCity) //Este codigo puede variar dependiendo de como se obtenga la ciudad seleccionada
    totalP.textContent = `$${city.price}`
    document.getElementById('title').textContent = `Calcula tu viaje a ${city.city}`
    document.getElementById('img').src = city.img
    document.getElementById('desc').textContent = city.desc

    let hotels = ``

    city.hotels.forEach(hotel => {
        hotels += `<option>${hotel.name}</option>`
    })

    hotelSelect.innerHTML = hotels
})

inputCant.addEventListener('input', () => {
    getTotal()
})

inputDays.addEventListener('input', () => {
    getTotal()
})

hotelSelect.addEventListener('change', () => {
    getTotal()
})