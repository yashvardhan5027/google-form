const scriptURL = ''
const form = document.forms['contact-form']

form.addEventListener(  'submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
  .then(Response => alert("thank you! your form is submitted."))
  .then( () => {window.location.reload();} )
  .catch(error => console.error( 'error!',error.massage))
})