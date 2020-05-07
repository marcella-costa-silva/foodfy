const modalOverlay = document.querySelector('.modal-overlay')
const items = document.querySelectorAll('.item')
const closeModal = document.querySelector('.close-modal')

for (let item of items) {
  item.addEventListener('click', () => {
    const photoId = item.getAttribute('id')
    const nomeReceita = item.querySelector('h2.nome').textContent
    const autor = item.querySelector('p.autor').textContent

    modalOverlay.classList.add('active')
    modalOverlay.querySelector('img').src = `assets/img/${photoId}.png`
    modalOverlay.querySelector('h1').innerText = nomeReceita
    modalOverlay.querySelector('p').innerText = autor
  })
}

closeModal.addEventListener('click', () => modalOverlay.classList.remove('active'))
