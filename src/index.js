import data from './data'

const root = document.querySelector('#app')

data.forEach((item) => {
  const li = document.createElement('li')
  li.textContent = item.title
  root.append(li)
})
