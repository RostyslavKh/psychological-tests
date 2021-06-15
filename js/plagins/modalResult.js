'use strict'

$1.modalResult = function (options) {
  let $modalResult = document.querySelectorAll('.modal-result')
  let $resultText = document.querySelector('#inner-message') //Содержания текста внутри окна
  let $title = document.querySelector('.modal-result-title') //Заглавие теста
  if (options.title) {
    $title.textContent = options.title
  } else {
    $title.textContent = 'Окно'
  }
  /* if (options.content) {
    console.log(options.content)
    $resultText.textContent = options.content
  } else {
    $resultText.textContent = 'Разное всякое'
  } */

  const modal = {
    open() {
      $modalResult[0].classList.add('open')
    },
    close() {
      $modalResult[0].classList.remove('open')
    },
    setContent(html) {
      $modalResult[0].querySelector('[data-content]').innerHTML = html
    },
  }

  $modalResult[0].addEventListener('click', (event) => {
    if (event.target.dataset.close) {
      modal.close()
    }
  })

  return modal
}
