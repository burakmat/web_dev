const text = document.querySelector("#textBox");
const btn = document.querySelector("button");
const list = document.querySelector("#mainList");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let newLI = document.createElement("li");
    newLI.innerText = text.value;
    list.appendChild(newLI);
    text.value = "";
})