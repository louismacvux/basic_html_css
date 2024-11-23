function toggleCSS1() {
  let title = document.getElementsByClassName("section-title");
  let content = document.getElementsByClassName("section-content");
  let nav = document.getElementsByClassName("nav-items");
  let elements = [...title, ...content, ...nav];
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("box");
  }
}
function toggleCSS2() {
  let skill = document.getElementsByClassName("skill-column");
  let content = document.getElementsByClassName("project-content");
  let header = document.getElementsByClassName("project-header");
  let elements = [...skill, ...content, ...header];
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("box1");
  }
}
function foo() {
  let name = document.getElementByI("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  alert(
    `The form was submitted\nname= ${name}\nemail=${email}\nphone=${phone}`
  );
}
