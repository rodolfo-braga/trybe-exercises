let header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

let emergency = document.querySelector('.emergency-tasks');
emergency.style.backgroundColor = 'lightpink';
emergency.style.display = 'inline-block';
emergency.style.maxWidth = '40%';

let emergencyH3 = document.querySelectorAll('.emergency-tasks h3');
emergencyH3[0].style.backgroundColor = 'purple';
emergencyH3[1].style.backgroundColor = 'purple';

let noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.backgroundColor = 'yellow';
noEmergency.style.display = 'inline-block';
noEmergency.style.maxWidth = '40%';

let noEmergencyH3 = document.querySelectorAll('.no-emergency-tasks h3');
noEmergencyH3[0].style.backgroundColor = 'black';
noEmergencyH3[1].style.backgroundColor = 'black';

let footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'darkblue';