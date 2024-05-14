import data from './data'
import './style.css'

const root = document.querySelector('#app')
interface Item {
  id: number
  title: string
}
function renderItem(item: Item, index: number) {
  const li = document.createElement('li')
  li.textContent = item.title
  if (index === 0) {
    li.style.color = 'blue'
  }
  root.append(li)
}

data.forEach(renderItem)
