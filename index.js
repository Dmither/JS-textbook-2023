let event = new Event("my-click", {bubbles: true});
document.addEventListener("my-click", function(event) {
  console.log("run my-click");
})

document.body.dispatchEvent(event)