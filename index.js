function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Error script loadimg for ${src}`))
  
  document.head.append(script);
}

loadScript("./outer.js", function(error, script) {
  if (error) {
    console.log(error.name)
  } else {
    console.log(`The script ${script.src} is loaded`)
    newFunction();
  }
})
