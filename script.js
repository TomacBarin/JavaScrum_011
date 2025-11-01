// Changing headline
const h1Html = document.querySelector(".heado");
h1Html.textContent = "This is a JavaScript Headline";

// Adding a list

const inputHtml = document.querySelector("#userInput");
const buttonHtml = document.querySelector("#btn");
const listHtml = document.querySelector("#todoList");

inputHtml.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && inputHtml.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = inputHtml.value;
        listHtml.appendChild(li);
        inputHtml.value = "";
    }
})

// Remove
// buttonHtml.addEventListener("click", () => {
//     const lastItem = listHtml.lastElementChild;
//     if (lastItem) {
//         lastItem.remove()
//     }
// })

buttonHtml.addEventListener("click", () => {
    listHtml.style.color = "#FF39D4";
})