let anchors = document.querySelectorAll("a");

console.log(anchors[4].getAttribute("href").slice(0, 3) === anchors[4].href.slice(0, 3))

for (let elem of anchors) {
  let href = elem.getAttribute("href");
  if (href.includes("://") && !href.includes("internal.com")) {
    elem.setAttribute("data-full", "")
  }
}