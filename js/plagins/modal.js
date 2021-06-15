/* Создание окна для записи на консультацию общее для всех страниц*/
function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('rmodal')
  modal.insertAdjacentHTML(
    'afterbegin',
    `
        <div class="modal-overly" data-close = 'true'>
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title"> Записаться на прием</span>
                    <span class="modal-close" data-close = 'true'> &times; </span>
                </div>
                <div class="modal-body">
                  <input type="text" style="width: 400px; text-align: center" placeholder=" Ваше имя (обязательно)" id = 'client-name' required/>                  
                  <p id='invalid-name' style = 'color: red; hight: 30px'>  </p> <br>
                  <input
                      type="tel"
                      id = 'client-phone'
                      name="phoneNumber"
                      list="tel-list"
                      placeholder="Номер телефона (обязательно)"                      
                      style="width: 400px; text-align: center; align-self: center" 
                      required                                          
                    />                   
                  <p id='invalid-phone' style = 'color: red; hight: 30px'>     </p><br>                  
                </div>
                <div class="modal-footer">
                    <button style='margin: auto; width: 172px; height: 50px; color: white; background: #5aa23e' onclick = 'mainHeaderSend()'>Отправить</button>                    
                </div>
            </div>
        </div>
    `
  )
  document.body.appendChild(modal)
  return modal
}

/*Объект с функциями для записи на консультацию*/
$1.modal = function (options) {
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options)
  let closing = false
  let destroyed = false

  const modal = {
    open() {
      if (destroyed) {
        console.log('Modal is destoyed')
      }
      !closing && $modal.classList.add('open')
    },

    close() {
      if (destroyed) {
        console.log('Modal is destoyed')
      }
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false
      }, ANIMATION_SPEED)
    },
  }

  const listener = (event) => {
    if (event.target.dataset.close) {
      modal.close()
    }
  }
  $modal.addEventListener('click', listener)

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal), $modal.removeEventListener('click', listener)
      destroyed = true
    },
  })
}

// *temp*
const modal = $1.modal()

$(document).ready(function () {
  $('#client-phone').mask('+38 (099) 999-99-99')
})

function mainHeaderSend() {
  let rightName = false
  let rightPhone = false
  let $clientName = document.querySelector('#client-name')
  let $invalidName = document.querySelector('#invalid-name')
  let $invalidPhone = document.querySelector('#invalid-phone')
  let $clientPhone = document.querySelector('#client-phone')

  if ($clientName.value == '') {
    $invalidName.textContent = 'Поле обязательно для заполнения'
  } else {
    $invalidName.textContent = ''
    rightName = true
  }

  let phone_valid = /^\+38\ \([\d]{3}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/
  if (phone_valid.test($clientPhone.value)) {
    $invalidPhone.textContent = ''
    rightPhone = true
  } else {
    $invalidPhone.textContent = 'Телефон введен не верно'
  }
  // console.log($clientName.value + '  ' + $clientPhone.value)
  if (rightName && rightPhone) {
    let $name = document.querySelector('#inner-confirm-name') //Содержания текста внутри окна
    let $phone = document.querySelector('#inner-confirm-phone') //Заглавие теста
    $name.textContent = 'Имя:        ' + $clientName.value
    $phone.textContent = 'Телефон:    ' + $clientPhone.value
    let $confirmName = document.querySelector('#client-confirm-name')
    let $confirmPhone = document.querySelector('#client-confirm-phone')
    $confirmName.value = $clientName.value
    $confirmPhone.value = $clientPhone.value
    modal.close()
    modalConfirm.open()
  }
}
