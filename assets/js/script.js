const modalOverlay = document.querySelector('.modal-overlay')
const items = document.querySelectorAll('.item')
const closeModal = document.querySelector('.close-modal')

for (let item of items) {
  item.addEventListener('click', () => modalOverlay.classList.add('active'))
}

closeModal.addEventListener('click', () => modalOverlay.classList.remove('active'))