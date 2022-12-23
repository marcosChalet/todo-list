const titulo = document.getElementById('title')
const assunto = document.getElementById('assunto')

const itens = document.getElementById('todo-list')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const tituloNovo = document.createElement('h1')
  const assuntoNovo = document.createElement('p')
  const itemNovo = document.createElement('div')
  const descricao = document.createElement('div')
  const icones = document.createElement('div')

  const textTitulo = document.createTextNode(titulo.value)
  const textAssunto = document.createTextNode(assunto.value)

  tituloNovo.append(textTitulo)
  assuntoNovo.append(textAssunto)

  const hamburguer = document.createElement('i')
  hamburguer.classList.add('fa-solid')
  hamburguer.classList.add('fa-bars')
  hamburguer.classList.add('icon')
  const lixeira = document.createElement('i')
  lixeira.classList.add('fa-solid')
  lixeira.classList.add('fa-trash-can-arrow-up')
  lixeira.classList.add('icon')

  icones.classList.add('icons-item')
  icones.append(lixeira)
  icones.append(hamburguer)
  descricao.append(tituloNovo)
  descricao.append(assuntoNovo)

  itemNovo.append(descricao)
  itemNovo.append(icones)

  itemNovo.classList.add('item')
  itens.insertBefore(itemNovo, itens.children[0])
})

