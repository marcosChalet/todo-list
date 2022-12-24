const titulo = document.getElementById('title')
const assunto = document.getElementById('assunto')

const itens = document.getElementById('todo-list')

let totalItens = 0

function createTodoItem() {
  const tituloNovo = document.createElement('h1')
  const assuntoNovo = document.createElement('p')
  const descricao = document.createElement('div')

  const textTitulo = document.createTextNode(titulo.value)
  const textAssunto = document.createTextNode(assunto.value)

  tituloNovo.append(textTitulo)
  assuntoNovo.append(textAssunto)

  descricao.append(tituloNovo)
  descricao.append(assuntoNovo)

  return descricao
}

function createIconsItem() {
  const icones = document.createElement('div')
  const hamburguer = document.createElement('i')
  const lixeira = document.createElement('i')

  hamburguer.classList.add('fa-solid')
  hamburguer.classList.add('fa-bars')
  hamburguer.classList.add('icon')

  lixeira.classList.add('fa-solid')
  lixeira.classList.add('fa-trash-can-arrow-up')
  lixeira.classList.add('icon')
  lixeira.setAttribute('id', `${++totalItens}`)
  lixeira.addEventListener('click', event => {
    event.stopPropagation()
    const id = event.target.id
    const nodeRemove = document.getElementById(`child-${id}`)
    nodeRemove.parentNode.removeChild(nodeRemove)
  })

  icones.classList.add('icons-item')
  icones.append(lixeira)
  icones.append(hamburguer)

  return icones
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const itemNovo = document.createElement('div')

  itemNovo.append(createTodoItem())
  itemNovo.append(createIconsItem())

  itemNovo.setAttribute('id', `child-${totalItens}`)
  itemNovo.classList.add('item')
  itens.insertBefore(itemNovo, itens.children[0])
})

