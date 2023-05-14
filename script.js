const listElems = document.querySelector("ul");
const submitform = document.querySelector("form");

// console.log(deleteButton.parentElement);

submitform.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newInput = formData.get("list");

  //   const detleteButtton = formData.get("delete-button");

  const newlistItem = document.createElement("li");
  newlistItem.innerHTML = `<input class="list" type="text"  value="${newInput}"> <button type="button"  class="delete" ></button>`;

  listElems.append(newlistItem);

  const input = document.querySelector(".list");
  input.value = "";

  const deleteButton = document.querySelectorAll(".delete");
  deleteButton.forEach((element) => {
    element.addEventListener("click", deleteEelement);
    console.log(newInput);
  });
  /////////////////////////////////////////////////////////////////////////////////// forEach ile ede bilmedim

  ///////////////////////////////////////////////////////////////////////////////////////
  //   const element = document.querySelectorAll(".delete");
  //   for (let i = 0; i < element.length; i++) {
  //     element[i].addEventListener("click", () => {
  //       element[i].parentElement.remove();
  //     });
  //   }
});

const deleteEelement = (event) => {
  // elementClasses.remove('.list');
  const parElement = event.target.parentElement;
  console.log(parElement);
  parElement.remove();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let sortButton = document.querySelector(".sorting");

sortButton.addEventListener("click", (event) => {
  const allInputs = document.querySelectorAll("list");

  let arrayFromInputs = Array.from(allInputs);
  let sortedArr = arrayFromInputs.sort((a, b) => {
    if (event.target.classList.contains(".button-sorting")) {
      if (isNaN(a.value) && isNaN(b.value)) {
        if (a.value > b.value) {
          return -1;
        }
        if (a.value < b.value) {
          return 1;
        }
        return 0;
      } else {
        return a.value - b.value;
      }
    } else if (event.target.classList.contains("")) {
      if (isNaN(a.value) && isNaN(b.value)) {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      } else {
        return a.value - b.value;
      }
    }
  });
  console.log(sortedArr);
});
