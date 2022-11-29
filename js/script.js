//////////////////////////
// FEATURES TAB NAVIGATION
//////////////////////////

const tabs = document.querySelectorAll(".feature-tab")

tabs.forEach((tab) => {
  const tab1 = document.querySelector("#tab-1")
  const tab2 = document.querySelector("#tab-2")
  const tab3 = document.querySelector("#tab-3")

  tab.addEventListener('click', () => {
    if(tab.classList.contains('tab1')) {

      tab1.classList.add('active')
      tab2.classList.remove('active')
      tab3.classList.remove('active')
    }
    
    if(tab.classList.contains('tab2')) {
      tab1.classList.remove('active')
      tab2.classList.add('active')
      tab3.classList.remove('active')
    }

    if(tab.classList.contains('tab3')) {
      tab1.classList.remove('active')
      tab2.classList.remove('active')
      tab3.classList.add('active')
    }
  })
})