document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-radio');

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      window.location.hash = "#" + event.target.value
    });
  });

  const hash = window.location.hash.split("#")[1]
  const tab = document.querySelector(`.tab-radio[value='${hash}'`)
  if(tab) {
    tab.checked = true
  }
});
