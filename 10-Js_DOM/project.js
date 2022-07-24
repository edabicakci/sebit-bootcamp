// const button = document.querySelector("button")
// const button = document.querySelector("#buttonId")
// const button = document.querySelector(".buttonClass")
const button = document.getElementById("buttonId");
// const button = document.getElementsByClassName("buttonClass")[0]

//ilk yontem
// button.addEventListener("click", ()=>{
//     console.log("Tiklandi");
// })

//ikinci yontem
function add() {
  console.log("Tiklandi");
  ulElement.append(liElement)
//ulElement.prepend(liElement)
  
}
console.log(button);

const liElements = document.querySelectorAll("li");
console.log(liElements);

liElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log("Tiklandi");
    // console.log(e.target);
    // console.log(e);
    e.target.style.backgroundColor = "blue";
  });
});


const ulElement = document.querySelector("ul");
console.log(ulElement);

// ulElement.remove();

// when clicking one of the li elements, then remove the clicked one
liElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      // console.log("Tiklandi");
      // console.log(e.target);
      // console.log(e);
      e.target.remove();
    });
  });
  

 const liElement = document.createElement("li");
 liElement.textContent = "Javascript";
//append =>>> sona ekler
//prepend =>>> basa ekler


