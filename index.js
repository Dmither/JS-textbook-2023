let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
  "Do you agree?",
  () => console.log("You are agree"),
  () => console.log("You are not agree")
)