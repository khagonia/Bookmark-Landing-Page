//////////////////////////
// FEATURES TAB NAVIGATION
//////////////////////////

const tabs = document.querySelectorAll(".feature-tab")
const tabsContainer = document.querySelector(".features-list")
const info = document.querySelectorAll(".feature-info")

function removeActive(elements) {
  elements.forEach((element) => {
    element.classList.remove('active')
  })
}

tabsContainer.addEventListener('click', (e) => {
  e.preventDefault();

  removeActive(tabs);
  e.target.classList.add('active');

  removeActive(info);
  document.getElementById(`tab-${e.target.dataset.tab}`).classList.add('active');

})

// tabs.forEach((tab) => {
//   tab.addEventListener('click', () => {
//     removeActive(tabs)
//     tab.classList.add('active')

//     removeActive(info)
//     if(tab.classList.contains("tab1")) {
//       document.querySelector('#tab-1').classList.add('active')
//     }

//     if(tab.classList.contains("tab2")) {
//       document.querySelector('#tab-2').classList.add('active')
//     }
    
//     if(tab.classList.contains("tab3")) {
//       document.querySelector('#tab-3').classList.add('active')
//     }
//   })
// })

//////////////////////////
// FAQ ACCORDION
//////////////////////////

const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.closest('.question-box').classList.toggle('active')
  })  
})
  
//////////////////////////
// FORM VALIDATION
//////////////////////////

import FormValidator from "./FormValidator.js"

function check(value, inputField) {
  if(value.length == '') {
    return {
      pass: false,
      error: "Yikes don't leave this empty"
    }
  }

  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(!pattern.test(value)) {
    return {
      pass: false,
      error: "Whoops, make sure it's an email"
    }
  } 
  
  return {
    pass: true,
  }
}

function fHandler(form, hasErrors) {
  if(!hasErrors) {
    form.submit()
  } else {
    const inputField = form.querySelector('#email')
    const errorElement = form.querySelector('.error-message')

    const {pass, error} = check(inputField.value, inputField) 
    form.querySelector('.input-container').classList.add('error')
    form.querySelector('p').textContent = error
  }      
}

const fv = new FormValidator('#cta-form', fHandler)

// register(inputSelector, check): register an input field and a check logic
//
// check is a function which defines the
// validation logic of an input field. Must return an object with the pass
// result and its corresponding error message when it fails.
//
// in this case, if the input is empty... then an error message is thrown

fv.register("#email", check, document.querySelector('.input-container'))



// const input = document.querySelector('#email')
// const inputBox = document.querySelector('.input-container')
// inputBox.addEventListener('click', () => {
//   inputBox.classList.remove('error')
// })


//////////////////////////
// MOBILE NAVIGATION
//////////////////////////

const btn = document.querySelector('.btn-mobile-nav')

btn.addEventListener('click', () => {
  const nav = document.querySelector('.nav-header')

  btn.querySelector('.hamburger').classList.toggle('hidden')
  btn.querySelector('.close').classList.toggle('hidden')
  nav.classList.toggle('open')
})
