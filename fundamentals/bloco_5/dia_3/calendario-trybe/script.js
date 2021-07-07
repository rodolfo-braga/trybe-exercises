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
  function createButton(buttonName) {
      const button = document.createElement('button');
      button.innerText = buttonName;
      button.id = 'btn-holiday';
      document.querySelector('.buttons-container').appendChild(button);
  }

  createButton('Feriados');

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
