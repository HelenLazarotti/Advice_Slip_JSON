//PEGO OS DADOS QUE VOU ALTERAR/MANIPULAR:
const btn = document.querySelector('.btn-click');
const pageOne = document.querySelector('.first-page');
const pageTwo = document.querySelector('.secound-page');
const message = document.querySelector('.message');
const parag = document.querySelector('.p_id');

//quando eu clicar no botão, espero que pegue minha mensagem:
btn.addEventListener('click', () => {

  //faço requisição AJAX, com JQuery:
    $.ajax({
        url: 'https://api.adviceslip.com/advice',
        dataType: 'json',
        type: 'GET',
        success: function (response) {

            //manipulo os dados:
            let apiSlip = response.slip;
            message.innerHTML = `"${apiSlip.advice}"`;
            parag.innerHTML = `#${apiSlip.id}`;
        }
    })
    //esconder/aparecer manipulações:
    pageOne.classList.toggle('hide');
    pageTwo.classList.toggle('hide');

})

//crio função que acessa a API: NÃO FUNCIONOU.
/*function getMessage() {
  fetch('https://api.adviceslip.com/advice')
  .then((response) => {
    response.json();
  })
  .then((response) => {
    let data = response.slip;
    let dataId = data.id;
    let dataText = data.advice;

    message.innerHTML = dataText;
  })
  .catch(function(error){
    console.log(error)
  })

}*/
