// Adiciona a sigla dos estados na tag select
const statesInitials = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

let selectState = document.querySelector('#state');
for (let index = 0; index < statesInitials.length; index += 1) {
  let state = document.createElement('option');
  state.value = statesInitials[index];
  state.innerHTML = statesInitials[index];
  selectState.appendChild(state);
}

function handleSubmit(event) {
  event.preventDefault();

}

window.onload = () => {
  let btnSubmit = document.querySelector('#btn-submit');
  btnSubmit.addEventListener('click', handleSubmit);
}