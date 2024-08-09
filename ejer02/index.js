// ejercicio 2.1
const div = document.createElement('div')
document.body.appendChild(div)

//ejercicio 2.2
const div2 = document.createElement('div')
const p = document.createElement('p')
div2.appendChild(p)
document.body.appendChild(div2)

//ejercicio 2.3
const div3 = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p2 = document.createElement('p')
  div3.appendChild(p2)
}
document.body.appendChild(div3)

//ejercicio 2.4
const p3 = document.createElement('p')
p3.textContent = 'Soy dinámico'
document.body.appendChild(p3)

//ejercicio 2.5
const miH2 = document.querySelector('h2.fn-insert-here')
miH2.textContent = 'Wubba Lubba dub dub'

//ejercicio 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  li.textContent = apps[i]
  ul.appendChild(li)
}
document.body.appendChild(ul)

//ejercicio 2.7
const elimina = document.querySelectorAll('.fn-remove-me')

for (let i = 0; i < elimina.length; i++) {
  elimina[i].remove()
}

//ejercicio 2.8
const div4 = document.querySelectorAll('div')
const p4 = document.createElement('p')
p4.textContent = 'Voy en medio!'
document.body.insertBefore(p4, div4[1])

//ejercicio 2.9
const allDiv = document.querySelectorAll('.fn-insert-here')
for (let i = 0; i < allDiv.length; i++) {
  const p5 = document.createElement('p')
  p5.textContent = 'Voy dentro!'
  allDiv[i].appendChild(p5)
}
