const tabs = document.querySelectorAll('.tab-radio');

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    window.location.hash = "#" + event.target.value
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  let hash = window.location.hash.split("#")[1]
  let tab = document.querySelector(`.tab-radio[value='${hash}'`)
  if(tab) {
    tab.checked = true
  }
})