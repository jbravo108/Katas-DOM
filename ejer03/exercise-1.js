//ejercicio 3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
for (let i = 0; i < countries.length; i++) {
  const li = document.createElement('li')
  li.textContent = countries[i]
  ul.appendChild(li)
}
document.body.appendChild(ul)

//ejercicio 3.2
const elem = document.querySelector('.fn-remove-me')
elem.remove()

//ejercicio 3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ulDos = document.createElement('ul')
for (let i = 0; i < cars.length; i++) {
  const liDos = document.createElement('li')
  liDos.textContent = cars[i]
  ul.appendChild(liDos)
}
const miDiv = document.querySelector("[data-function='printHere']")
miDiv.appendChild(ul)
//ejercicio 3.4
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
for (let i = 0; i < countries2.length; i++) {
  const miDiv2 = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  h4.textContent = countries2[i].title
  img.src = countries2[i].imgUrl
  miDiv2.appendChild(h4)
  miDiv2.appendChild(img)
  document.body.appendChild(miDiv2)
}

//ejercicio 3.5
const boton = document.createElement('button')
boton.textContent = 'ELIMINA'
document.body.appendChild(boton)
function elimina() {
  const todosDiv = document.querySelectorAll('div')
  todosDiv[todosDiv.length - 1].remove()
}
boton.addEventListener('click', elimina)
//ejercicio 3.6
const allDivs = document.querySelectorAll('div')
for (let i = 1; i < allDivs.length; i++) {
  //va desde 1, para que no meta en el array el primer div con data-function="printHere" del HTML
  const botonDiv = document.createElement('button')
  botonDiv.textContent = 'Elimina DIV'
  allDivs[i].appendChild(botonDiv)
  botonDiv.addEventListener('click', (e) => e.target.parentElement.remove())
}
