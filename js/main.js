const calcAnswer = document.querySelector('.calc__answer');
const calcBtn = document.querySelector('.calc__calculate');
const calcSelect = document.querySelector('.calc__select');
const calcInputs = document.querySelectorAll('.calc__input');
let answ = 0;
let taskStr = '';

// Проверка формы на валидность при вводе новых значений
calcInputs.forEach(item => item.addEventListener('change', valid));

// Вызов главной функции, проведение математической операции
calcBtn.addEventListener('click', calc);
calcSelect.addEventListener('change', calc);

function calc() {
  // Проверка формы на валидность
  valid();

  //Перебор всех инпутов
  calcInputs.forEach(item => {
    //В случае отсутствия значений применяется ноль
    item.value == '' ? (item.value = 0) : null;
    //Соединение всех значений инпута и значения селекта в одну строку
    taskStr += `${item.value} ${calcSelect.value}`;
    //Финальный расчет, удаление лишнего знака, преобразование строки в число, округление
    answ = Math.round(eval(taskStr.slice(0, -1)));
  });
  //Проверка на NaN, для деления ноль на ноль
  isNaN(answ)
    ? (calcAnswer.textContent = 'ERROR!')
    : (calcAnswer.textContent = answ);

  //Возвращение начальных значений
  answ = 0;
  taskStr = '';
}

//Функция проверки на валидность инпутов
function valid() {
  calcInputs.forEach(item => {
    //В случае пустого инпута окрашивать бордер в красный, в противоположном случае, в старндартный цвет
    item.value == ''
      ? (item.style.borderColor = 'red')
      : (item.style.borderColor = 'rgb(0, 85, 85)');
  });
}
