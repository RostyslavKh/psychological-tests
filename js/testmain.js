'use strict'
let answer
let isCheckedAllAnswer
let message

/*Функция для ввода шифрования имени*/
function inputPressmark(params) {
  let isPressmark = false
  do {
    let namePressmark = prompt('Введите шифр')
    isPressmark = confirm(namePressmark)
  } while (!isPressmark)
}

/*Функция для определения количества баллов в тесте Шкала депресии BECK*/
function depressionScaleSum() {
  let isChecked = []
  let summaOfTest = 0
  let messageHTML
  let listNumberOfLi = document.querySelector('ol').childElementCount

  for (let j = 0; j < listNumberOfLi; j++) {
    answer = document.getElementsByName('answer' + Number(j + 1))
    isChecked[j] = false
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].checked) {
        summaOfTest = summaOfTest + Number(answer[i].value)
        isChecked[j] = true
      }
    }
  }
  message =
    summaOfTest < 10
      ? ` Ваш результат: ${summaOfTest}  — отсутствие депрессивных симптомов [0-9]`
      : summaOfTest < 16
      ? ` Ваш результат: ${summaOfTest} — легкая депрессия (субдепрессия) [10-15]`
      : summaOfTest < 20
      ? ` Ваш результат: ${summaOfTest} — умеренная депрессия [16-19]`
      : summaOfTest < 30
      ? ` Ваш результат: ${summaOfTest} — выраженная депрессия (средней тяжести) [20-29]`
      : `Ваш результат: ${summaOfTest} [30-63] — тяжёлая депрессия`

  messageHTML =
    summaOfTest < 10
      ? `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> — отсутствие депрессивных симптомов [0-9] </p>`
      : summaOfTest < 16
      ? `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> — легкая депрессия (субдепрессия) [10-15]</p>`
      : summaOfTest < 20
      ? `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> — умеренная депрессия [16-19]</p>`
      : summaOfTest < 30
      ? `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> — выраженная депрессия (средней тяжести) [20-29]</p>`
      : `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> — тяжёлая депрессия [30-63]</p>`

  isCheckedAllAnswer = true

  for (let j = 0; j < listNumberOfLi; j++) {
    if (isChecked[j] == false) {
      isCheckedAllAnswer = false
    }
  }

  if (isCheckedAllAnswer) {
    let modalResult = $1.modalResult({
      title: 'Результат теста по шкале депресии BECK',
      width: '400px',
    })
    modalResult.setContent(messageHTML)
    modalResult.open()
  } else {
    alert('Вы ответили не на все вопросы')
  }
}

/*Функция для определения количества баллов в тесте Шкала тревоги (BAI) BECK*/
function anxietyScaleSum() {
  let isChecked = []
  let summaOfTest = 0
  let messageHTML
  let listNumberOfLi = document.querySelector('ol').childElementCount
  for (let j = 0; j < listNumberOfLi; j++) {
    answer = document.getElementsByName('answer' + Number(j + 1))
    isChecked[j] = false
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].checked) {
        summaOfTest = summaOfTest + Number(answer[i].value)
        isChecked[j] = true
      }
    }
  }
  message =
    summaOfTest < 22
      ? `Результаты BAI (${summaOfTest}) — Незначительный уровень тревоги. Низкая тревожность.
                Отличная вещь! (если вы были реалистичны в своей оценке)
                Слишком низкая тревога может указывать на то, что вы оторваны от себя, других или своего окружения.`
      : summaOfTest < 36
      ? `Результаты BAI (${summaOfTest}) — Средняя выраженность тревоги.
                Предрасположенность к восприятию широкого круга ситуаций как угрожающих своей самооценке, престижу, самоуважению или жизнедеятельности.
                Склонность реагировать на такие ситуации состоянием тревоги. Чувствительность в отношении тех негативных событий или неудач которые предположительно могут случиться или произойти.`
      : `Результаты BAI (${summaOfTest}) - Очень высокая тревога. Это потенциальная причина для беспокойства. \r\n
      Стоит задуматься — в каких обстоятельствах, как и когда проявляются эти симптомы.\r\n
      Постоянное и сильное беспокойство не является признаком личной слабости или неудачи. Однако такой высокий уровень тревоги требует не просто вашего внимания, такое состояние стоит проактивно лечить. (Иначе это может иметь значительные последствия для вас, и умственно и физически).
      Если накал чувств сохраняется, стоит обратиться к врачу или психологу.`

  messageHTML =
    summaOfTest < 22
      ? `<p style = 'text-indent: 20px;'> <strong>Результаты теста:<span style='color:red'>(${summaOfTest})</span></strong> — Незначительный уровень тревоги. Низкая тревожность.<br>
         Отличная вещь! (если вы были реалистичны в своей оценке)<br>
         Слишком низкая тревога может указывать на то, что вы оторваны от себя, других или своего окружения.</p>`
      : summaOfTest < 36
      ? `<p style = 'text-indent: 20px;'><strong>Результаты теста:<span style='color:red'>(${summaOfTest})</span></strong> — Средняя выраженность тревоги.</p>
         <p>   Предрасположенность к восприятию широкого круга ситуаций как угрожающих своей самооценке, престижу, самоуважению или жизнедеятельности.<br>
            Склонность реагировать на такие ситуации состоянием тревоги. Чувствительность в отношении тех негативных событий или неудач которые предположительно могут случиться или произойти.`
      : `<p style = 'text-indent: 20px;'><strong>Результаты теста: <span style='color:red'>(${summaOfTest})</span></strong> - Очень высокая тревога. Это потенциальная причина для беспокойства. <br>
           Стоит задуматься — в каких обстоятельствах, как и когда проявляются эти симптомы.<br>
        Постоянное и сильное беспокойство не является признаком личной слабости или неудачи. Однако такой высокий уровень тревоги требует не просто вашего внимания, такое состояние стоит проактивно лечить. (Иначе это может иметь значительные последствия для вас, и умственно и физически).<br>
        Если накал чувств сохраняется, стоит обратиться к врачу или психологу.</p>`

  isCheckedAllAnswer = true
  for (let j = 0; j < listNumberOfLi; j++) {
    if (isChecked[j] == false) {
      isCheckedAllAnswer = false
    }
  }
  if (isCheckedAllAnswer) {
    let modalResult = $1.modalResult({
      title: 'Результат теста по шкале тревоги (BAI) BECK',
      width: '400px',
    })
    modalResult.setContent(messageHTML)
    modalResult.open()
  } else {
    alert('Вы ответили не на все вопросы')
  }
}

/*Функция для определения результатов теста на влияние события*/
function eventInfluanceScaleSum() {
  let isChecked = []
  let summaOfTest = 0
  let messageHTML
  let listNumberOfLi = document.querySelector('ol').childElementCount
  let answerValue = []
  for (let j = 0; j < listNumberOfLi; j++) {
    answer = document.getElementsByName('answer' + Number(j + 1))
    isChecked[j] = false
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].checked) {
        answerValue.push(Number(answer[i].value))
        summaOfTest = summaOfTest + Number(answer[i].value)
        isChecked[j] = true
      }
    }
  }

  let subScaleAvoidance = [4, 6, 7, 10, 11, 12, 16, 21] // уникнення
  let subScaleIntrusion = [0, 1, 2, 5, 8, 13, 15, 19] //інтрузії
  let subScaleHyperexcitation = [3, 9, 14, 17, 18, 20] //гіперзбудження

  let summaSubScaleAvoidance = () => {
    let summa = 0
    for (let i = 0; i < subScaleAvoidance.length; i++) {
      summa += answerValue[subScaleAvoidance[i]]
    }
    return summa
  }

  let summasubScaleIntrusion = () => {
    let summa = 0
    for (let i = 0; i < subScaleIntrusion.length; i++) {
      summa += answerValue[subScaleIntrusion[i]]
    }
    return summa
  }

  let summasubScaleHyperexcitation = () => {
    let summa = 0
    for (let i = 0; i < subScaleHyperexcitation.length; i++) {
      summa += answerValue[subScaleHyperexcitation[i]]
    }
    return summa
  }

  /*  message = `    Сумма по шкале избегания ${summaSubScaleAvoidance()}
    Cумма по шкале интрузии ${summasubScaleIntrusion()}
    Сумма по шкале гипервозбуждения ${summasubScaleHyperexcitation()}` */

  messageHTML = `<p>Результат по шкале избегания ${Number(summaSubScaleAvoidance() / 8).toFixed(2)} из 4</p>
    <p>Результат по шкале интрузии ${Number(summasubScaleIntrusion() / 8).toFixed(2)} из 4</p>
    <p>Результат по шкале гипервозбуждения ${Number(summasubScaleHyperexcitation() / 6).toFixed(2)} из 4</p>`

  isCheckedAllAnswer = true
  for (let j = 0; j < listNumberOfLi; j++) {
    if (isChecked[j] == false) {
      isCheckedAllAnswer = false
    }
  }
  if (isCheckedAllAnswer) {
    let modalResult = $1.modalResult({
      title: 'Результат теста на влияние события',
      width: '400px',
    })
    modalResult.setContent(messageHTML)
    modalResult.open()
  } else {
    alert('Вы ответили не на все вопросы')
  }
}

/*Оределения результатов теста на диссоциацию */
function dissociationScaleSum() {
  let isChecked = []
  let summaOfTest = 0
  let messageHTML
  let listNumberOfLi = document.querySelector('ol').childElementCount
  for (let j = 0; j < listNumberOfLi; j++) {
    answer = document.getElementsByName('answer' + Number(j + 1))
    isChecked[j] = false
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].checked) {
        summaOfTest = summaOfTest + Number(answer[i].value)
        isChecked[j] = true
      }
    }
  }

  message = Number((summaOfTest / 28) * 10).toFixed(2)
  messageHTML = `<p style = 'text-indent: 20px;'> Результат теста: <strong><span style='color:red'>${message}%</span><strong></p>`

  isCheckedAllAnswer = true

  for (let j = 0; j < listNumberOfLi; j++) {
    if (isChecked[j] == false) {
      isCheckedAllAnswer = false
    }
  }

  if (isCheckedAllAnswer) {
    let modalResult = $1.modalResult({
      title: 'Результат теста на диссоциацию',
      width: '400px',
    })
    modalResult.setContent(messageHTML)
    modalResult.open()
  } else {
    alert('Вы ответили не на все вопросы')
  }
}

/* Функция для определения результатов теста Basic Ph*/
function basicPHScaleSum() {
  let isChecked = []
  let summaOfTest = 0
  let messageHTML
  let listNumberOfLi = document.querySelector('ol').childElementCount
  console.log(listNumberOfLi)
  let answerValue = []
  for (let j = 0; j < listNumberOfLi; j++) {
    answer = document.getElementsByName('answer' + Number(j + 1))
    isChecked[j] = false
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].checked) {
        answerValue.push(Number(answer[i].value))
        summaOfTest = summaOfTest + Number(answer[i].value)
        isChecked[j] = true
      }
    }
  }

  let subScaleB = [0, 6, 12, 18, 24, 30] //B 1 – Віра
  let subScaleA = [1, 7, 13, 19, 25, 31] //A 2 – Емоції
  let subScaleS = [2, 8, 14, 20, 26, 32] //S 3 – Соціум, стосунки
  let subScaleI = [3, 9, 15, 21, 27, 33] //I 4 – Уява
  let subScaleC = [4, 10, 16, 22, 28, 34] //C 5 – Розум
  let subScalePh = [5, 11, 17, 23, 29, 35] //Ph 6 – Тіло, фізична діяльність

  let summaSubScaleB = () => {
    let summa = 0
    for (let i = 0; i < subScaleB.length; i++) {
      summa += answerValue[subScaleB[i]]
    }
    return summa
  }

  let summaSubScaleA = () => {
    let summa = 0
    for (let i = 0; i < subScaleA.length; i++) {
      summa += answerValue[subScaleA[i]]
    }
    return summa
  }

  let summaSubScaleS = () => {
    let summa = 0
    for (let i = 0; i < subScaleS.length; i++) {
      summa += answerValue[subScaleS[i]]
    }
    return summa
  }

  let summaSubScaleI = () => {
    let summa = 0
    for (let i = 0; i < subScaleI.length; i++) {
      summa += answerValue[subScaleI[i]]
    }
    return summa
  }

  let summaSubScaleC = () => {
    let summa = 0
    for (let i = 0; i < subScaleC.length; i++) {
      summa += answerValue[subScaleC[i]]
    }
    return summa
  }

  let summaSubScalePh = () => {
    let summa = 0
    for (let i = 0; i < subScalePh.length; i++) {
      summa += answerValue[subScalePh[i]]
    }
    return summa
  }

  message = `B 1 – Віра ${summaSubScaleA()}
  A 2 – Емоції ${summaSubScaleB()}
  S 3 – Соціум, стосунки ${summaSubScaleS()}
  I 4 – Уява ${summaSubScaleI()}
  C 5 – Розум ${summaSubScaleC()}
  Ph 6 – Тіло, фізична діяльність ${summaSubScalePh()}
  `
  messageHTML = `<p>B 1 – Віра ${summaSubScaleA()}</p>
    <p> A 2 – Емоції ${summaSubScaleB()}</p>
    <p>S 3 – Соціум, стосунки ${summaSubScaleS()}</p>
    <p>I 4 – Уява ${summaSubScaleI()}</p>
    <p> C 5 – Розум ${summaSubScaleC()}</p>
    <p>Ph 6 – Тіло, фізична діяльність ${summaSubScalePh()}</p>`

  isCheckedAllAnswer = true
  for (let j = 0; j < listNumberOfLi; j++) {
    if (isChecked[j] == false) {
      isCheckedAllAnswer = false
    }
  }
  if (isCheckedAllAnswer) {
    let modalResult = $1.modalResult({
      title: 'Результат теста Basic Ph',
      width: '400px',
    })
    modalResult.setContent(messageHTML)
    modalResult.open()
  } else {
    alert('Вы ответили не на все вопросы')
  }
}

//Подсчет результатов теста Шкала самооценки
function selfEstimateScaleSum() {
  let isChecked = []
  let messageHTML
  let listNumberOfLi = document.querySelector('ol').childElementCount
  let summaOfTest = 0
  for (let j = 0; j < listNumberOfLi; j++) {
    answer = document.getElementsByName('answer' + Number(j + 1))
    isChecked[j] = false
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].checked) {
        summaOfTest = summaOfTest + Number(answer[i].value)
        isChecked[j] = true
      }
    }
  }
  message =
    summaOfTest < 10
      ? ` Ваш результат: ${summaOfTest}  — [0-9]`
      : summaOfTest < 16
      ? ` Ваш результат: ${summaOfTest} — [10-15]`
      : summaOfTest < 20
      ? ` Ваш результат: ${summaOfTest} — [16-19]`
      : summaOfTest < 30
      ? ` Ваш результат: ${summaOfTest} — [20-29]`
      : `Ваш результат: ${summaOfTest} [30-63]`
  messageHTML =
    summaOfTest < 10
      ? `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> —  [0-9]</p>`
      : summaOfTest < 16
      ? `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> — [10-15]</p>`
      : summaOfTest < 20
      ? `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> — [16-19]</p>`
      : summaOfTest < 30
      ? `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> — [20-29]</p>`
      : `<p><strong>Ваш результат: <span style='color:red'>(${summaOfTest})</span></strong> —[30-63]</p>`

  isCheckedAllAnswer = true
  for (let j = 0; j < listNumberOfLi; j++) {
    if (isChecked[j] == false) {
      isCheckedAllAnswer = false
    }
  }
  if (isCheckedAllAnswer) {
    let modalResult = $1.modalResult({
      title: 'Результат теста на самооценку',
      width: '400px',
    })
    modalResult.setContent(messageHTML)
    modalResult.open()
  } else {
    alert('Вы ответили не на все вопросы')
  }
}

/*Пробная функция для test.html*/
function test() {
  let yourName = prompt('Введи свое имя:')
  let isBoss = confirm(`${yourName} здесь главный?`)
  if (isBoss) {
    alert('Здраствуй, босс!')
  } else {
    alert('Так хули ты ноешь?')
  }
}
