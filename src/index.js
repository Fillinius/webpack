import data from './data'
import './style.css'

const root = document.querySelector('#app')

data.forEach((item) => {
  const li = document.createElement('li')
  li.textContent = item.title
  li.className = 'list_item'
  root.append(li)
})
