import { card } from './components/card.js'
import { navbar } from './components/navbar.js'
import { allCiudades } from './api/ciudades.api.js'
const cardContainer = document.getElementById('cardContainer')
const header = document.getElementById('header')
header.innerHTML = navbar()
document.addEventListener('DOMContentLoaded', async()=>{
  
    const data = await allCiudades()

    cardContainer.innerHTML = ''

    data.forEach((place) => {
        cardContainer.innerHTML += card(place.city, place.desc, place.price, place.id, place.img)
    })

    const btnCity = document.getElementsByName('btnCity')
    
    Array.from(btnCity).forEach(button => {
        button.addEventListener('click', (e) => {
            const city = JSON.parse(e.target.dataset.city)
            localStorage.setItem('selectedCity', JSON.stringify(city))
            window.location.href = './pages/info'
        })
    })
})