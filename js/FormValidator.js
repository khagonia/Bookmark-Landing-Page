export default class FormValidator {
  constructor(form_selector, formHandler) {

    this.formHandler = formHandler
    this.form = document.querySelector(form_selector)
    this.inputsWithErrors = new Set()

    // console.log(this.form)
    this.form.addEventListener('submit', e => {
      e.preventDefault()      
      this.formHandler(this.form,this.hasErrors)
    })
  }

  get hasErrors() {
    return this.inputsWithErrors.size > 0;
  }

  register(field_selector, check, error_element='') {
    const inputField = this.form.querySelector(field_selector)
    const errorElement = document.querySelector(error_element)

    const execute = (hideErrors) => {
      const {pass, error} = check(inputField.value, inputField)

      //do not execute on load

      
      if(!hideErrors) {
        errorElement.querySelector('.error-message').textContent = error || ''
        if(!pass) {
          errorElement.classList.add('error')
        } else {
          errorElement.classList.remove('error') 
        }
      }

      // execute on-loadprevent submit if it has errors
      if(!pass) {
        this.inputsWithErrors.add(inputField)
      } else {
        this.inputsWithErrors.delete(inputField)
      }
    }

    inputField.addEventListener('change', () => execute())
    execute(true) // hide errors upon initialization
  }
}