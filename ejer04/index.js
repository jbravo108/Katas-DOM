//ejercicio 1
const boton = document.createElement('button')
boton.id = 'btnToClick'
boton.textContent = 'Haz Click'
document.body.appendChild(boton)
boton.addEventListener('click', (e) => console.log(e))
//ejercicio 2
const foco = document.querySelector('.focus')
foco.addEventListener('focus', (e) => console.log(e.target.value))
//ejercicio 3
const input = document.querySelector('.value')
input.addEventListener('input', (e) => console.log(e.target.value))
