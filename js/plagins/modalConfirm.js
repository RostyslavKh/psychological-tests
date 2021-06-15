$1.modalConfirm = function (options) {
  let $modalConfirm = document.querySelectorAll('.modal-confirm')
  let $name = document.querySelector('#inner-confirm-name') //Содержания текста внутри окна
  let $phone = document.querySelector('#inner-confirm-phone') //Заглавие теста

  const modal = {
    open() {
      $modalConfirm[0].classList.add('open')
    },
    close() {
      $modalConfirm[0].classList.remove('open')
    },
  }

  $modalConfirm[0].addEventListener('click', (event) => {
    if (event.target.dataset.close) {
      modal.close()
    }
  })

  return modal
}

const modalConfirm = $1.modalConfirm()
