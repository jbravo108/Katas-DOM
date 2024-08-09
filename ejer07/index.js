const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
const div = document.querySelector("[data-function='printHere']")
const ul = document.createElement('ul')
for (const elemento of places) {
  const li = document.createElement('li')
  li.textContent = elemento
  ul.appendChild(li)
}
div.appendChild(ul)
