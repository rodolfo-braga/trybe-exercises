// Adiciona a sigla dos estados na tag select
const statesInitials = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

let selectState = document.querySelector('#state');
for (let index = 0; index < statesInitials.length; index += 1) {
  let state = document.createElement('option');
  state.value = statesInitials[index];
  state.innerHTML = statesInitials[index];
  selectState.appendChild(state);
}

// function handleSubmit(event) {
//   event.preventDefault();
// }

// window.onload = () => {
//   let btnSubmit = document.querySelector('#btn-submit');
//   btnSubmit.addEventListener('click', handleSubmit);
// }

$('.ui.radio.checkbox')
  .checkbox()
;

$('.ui.form')
  .form({
    fields: {
      name: {
        identifier: 'name',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor insira o seu nome'
          }, {
            type   : 'maxLength[40]',
          }]
      },
      email: {
        identifier: 'email',
        rules: [{
            type   : 'email',
            prompt : 'Por favor insira um e-mail válido'
          }, {
            type   : 'maxLength[50]',
          }]
      },
      cpf: {
        identifier: 'cpf',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor insira o seu CPF'
          }, {
            type   : 'maxLength[11]',
          }]
      },
      address: {
        identifier: 'address',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor insira o seu endereço'
          }, {
            type   : 'maxLength[200]',
          }]
      },
      city: {
        identifier: 'city',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor insira a sua cidade'
          }, {
            type   : 'maxLength[28]',
          }]
      },
      state: {
        identifier: 'state',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor selecione o seu estado'
          }]
      },
      residenceType: {
        identifier: 'houseType',
        rules: [{
            type   : 'checked',
            prompt : 'Por favor selecione o tipo da sua residência'
          }]
      },
      resume: {
        identifier: 'resume',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor o resumo do seu currículo'
          }, {
            type   : 'maxLength[1000]',
          }]
      },
      post: {
        identifier: 'post',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor o seu cargo'
          }, {
            type   : 'maxLength[40]',
          }]
      },
      jobDescription: {
        identifier: 'jobDescription',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor insira a descrição do cargo'
          }, {
            type   : 'maxLength[500]',
          }]
      },
      startDate: {
        identifier: 'startDate',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor selecione a data de início'
        }]
      }
    }
  });
