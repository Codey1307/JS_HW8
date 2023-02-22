let paragraph = document.querySelectorAll("p");

for (let p of paragraph) {
  p.style.backgroundColor = "#ff0000";
}

let elem = document.getElementById("optionsList");
console.log(elem);

let parents = elem.parentElement;
console.log(parents);

let children = elem.childNodes;
console.log(children);


if (children.length > 0) {
  for (let i = 0; i < children.length; i++) {
    console.log(i)
    let type = children[i].nodeName;
    let name = children[i].nodeType;
    console.log(type);
    console.log(name);
  }
}

let newParagraph = document.getElementById("testParagraph")
newParagraph.innerHTML = "This is a paragraph"

let mainElements = document.querySelector(".main-header")
mainElements = mainElements.querySelectorAll("*")
console.log(mainElements)

for(let i = 0; i < children.length; i++){
mainElements[i].classList.add("nav-item")
}

let classRemove = document.querySelectorAll(".section-title")
for(let i = 0; i < classRemove.length; i++){
classRemove[i].classList.remove("section-title")
}
console.log(classRemove)