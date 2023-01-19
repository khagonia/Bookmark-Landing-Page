//////////////////////////
// FEATURES TAB NAVIGATION
//////////////////////////

const featuresTab = () => {
  const tabs = document.querySelectorAll(".feature-tab");
  const tabsContainer = document.querySelector(".features-list");
  const info = document.querySelectorAll(".feature-info");

  function removeActive(elements) {
    elements.forEach((element) => {
      element.classList.remove("active");
    });
  }

  tabsContainer.addEventListener("click", (e) => {
    e.preventDefault();

    removeActive(tabs);
    e.target.classList.add("active");

    removeActive(info);
    document
      .getElementById(`tab-${e.target.dataset.tab}`)
      .classList.add("active");
  });
};
featuresTab();

//////////////////////////
// FAQ ACCORDION
//////////////////////////

const faqAccordion = () => {
  const questionContainer = document.querySelector(".question-container");

  questionContainer.addEventListener("click", (e) => {
    e.target.closest(".question-box").classList.toggle("active");
  });
};
faqAccordion();

//////////////////////////
// FORM VALIDATION
//////////////////////////

import FormValidator from "./FormValidator.js";

const formValidation = () => {
  function check(value, inputField) {
    if (value.length == "") {
      return {
        pass: false,
        error: "Yikes don't leave this empty",
      };
    }

    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(value)) {
      return {
        pass: false,
        error: "Whoops, make sure it's an email",
      };
    }

    return {
      pass: true,
    };
  }

  function formSubmitHandler(form, hasErrors) {
    if (!hasErrors) {
      form.submit();
    } else {
      const inputField = form.querySelector("#email");
      const errorElement = form.querySelector(".error-message");

      const { pass, error } = check(inputField.value, inputField);
      form.querySelector(".input-container").classList.add("error");
      form.querySelector("p").textContent = error;
    }
  }

  // FormValidator(formSelector, formSubmitHandler)
  //    : a class that allows you to handle basic form validation
  //    : formSelector     : a <form> selector of the form to be validated.
  //    : formSubmitHandler: a callback function that contains the logic on how to handle
  //                         form submission.

  const fv = new FormValidator("#cta-form", formSubmitHandler);

  // register(inputSelector, check, errorSelector)
  //    : register an input field within a form so that an event listener will be appended
  //      to validate user input on those fields based on a check logic. On error, you can
  //      pass a selector on where you want to display the error.
  //    : inputSelector : an <input> selector (class/id/tag), where validation should occur
  //    : check         : a callback function with a validation logic,
  //                      must return an object with {pass: true || false, error: "error message"}
  //    : errorElement  : a HTML element selector, where an error message will appear,
  //                      will append "error" in the classlist if inputElement has an error.

  fv.register("#email", check, ".input-container");

  //////////////////////////
  // MOBILE NAVIGATION
  //////////////////////////

  const btn = document.querySelector(".btn-mobile-nav");

  btn.addEventListener("click", () => {
    const nav = document.querySelector(".nav-header");

    btn.querySelector(".hamburger").classList.toggle("hidden");
    btn.querySelector(".close").classList.toggle("hidden");
    nav.classList.toggle("open");
  });
};
formValidation();

/////////////////////////////////
// SECTION SCROLLING ANIMATIONS
////////////////////////////////

const sectionScrolling = () => {
  const sections = document.querySelectorAll(".section");

  const revealCallback = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  };

  const revealObs = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.2,
  });

  sections.forEach((section) => {
    section.classList.add("section-hidden");
    revealObs.observe(section);
  });
};
sectionScrolling();
