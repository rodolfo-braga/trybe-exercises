function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Exercício 1
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
      const monthDays = dezDaysList[index];
      const dezDaysItem = document.createElement('li');
      dezDaysItem.innerHTML = monthDays;
      dezDaysItem.className = 'day';
      if (monthDays === 24 | monthDays === 25 | monthDays === 31) {
          dezDaysItem.classList.add('holiday');
      }
      if (monthDays === 4 | monthDays === 11 | monthDays === 18 | monthDays === 25) {
          dezDaysItem.classList.add('friday');
      }

      dezDays.appendChild(dezDaysItem);
  }
};

createDaysOfTheMonth();

//Exercício 2
function createHolidayButton(buttonName) {
    const holidayButton = document.createElement('button');
    holidayButton.innerText = buttonName;
    holidayButton.id = 'btn-holiday';
    document.querySelector('.buttons-container').appendChild(holidayButton);
}

createHolidayButton('Feriados');

//Exercício 3
function changeHolidaysBg () {
  let btnHoliday = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday');

  btnHoliday.addEventListener('click', function () {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === 'blue') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        holidays[index].style.color = 'rgb(119,119,119)';
      } else {
        holidays[index].style.backgroundColor = 'blue';
        holidays[index].style.color = 'rgb(238,238,238)';
      }
    }
  });
}

changeHolidaysBg();

//Exercício 4
function createFridayButton(buttonName) {
  const fridayButton = document.createElement('button');
  fridayButton.innerText = buttonName;
  fridayButton.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

//Exercício 5
function changeFridaysText () {
  let btnFriday = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');

  btnFriday.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerText === 'SEXTOU!') {
        fridays[index].innerText = Number(fridays[index].previousElementSibling.innerText) + 1;
      } else {
        fridays[index].innerText = 'SEXTOU!';
      };
    };
  });
};

changeFridaysText();

//Exercício 6
function zoomIn() {
  let getDays = document.querySelectorAll('.day');
  
  for (let index = 0; index < getDays.length; index += 1) {
    getDays[index].addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '60px';
    });
  };
};

function zoomOut() {
  let getDays = document.querySelectorAll('.day');

  for (let index = 0; index < getDays.length; index += 1) {
    getDays[index].addEventListener('mouseout', function (event) {
      event.target.style.fontSize = '20px';
    });
  };
};

zoomIn();
zoomOut();

//Exercício 7
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto: Arte com Pixels');

//Exercício 8
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('blue');

//Exercício 9
function selectTask() {
  let taskColor = document.querySelector('.task');

  taskColor.addEventListener('click', function(event) {
    if (event.target.className === 'task selected') {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    };
  });
};

selectTask();