let items = document.querySelectorAll(".list li");

Array.from(items).forEach((item, index, array) => {
  item.addEventListener("click", function(event) {
    if (!event.ctrlKey && !event.metaKey) {
      array.forEach(element => {
        element.classList.remove("active");
      });
      event.target.classList.add("active");
    } else {
      event.target.classList.toggle("active");
    }
  })
})
Array.from(items).forEach(item => {
  item.addEventListener("mousedown", function(event) {
    event.preventDefault();
  })
})

