// Review Section Start
let reviewField = document.querySelector(".reviewField");
let reviewList = document.querySelector(".reviewList");

document.querySelector(".submitBtn").addEventListener("click", () => {
  let reviewFieldText = reviewField.value;
  if (reviewFieldText == "") {
    alert("Please write Something");
  } else {
    let paragraph = document.createElement("p");
    paragraph.style.color = "white";
    paragraph.style.fontSize = "20px";
    paragraph.style.marginLeft = "10px";
    paragraph.style.marginRight = "10px";
    paragraph.style.marginTop = "10px";
    reviewList.appendChild(paragraph);
    paragraph.innerHTML = reviewFieldText;
    reviewField.value = "";
  }
});
document.querySelector(".resetBtn").addEventListener("click", () => {
  reviewList.innerHTML = "";
});
// Review Section End

// Delete Section Start
let imgHeading = document.getElementById("imgHeading");
let deleteInputField = document.querySelector(".deleteInputField");
let deleteBtn = document.querySelector(".deleteBtn");
deleteInputField.addEventListener("keyup", () => {
  let deleteInputFieldText = deleteInputField.value;
  if (deleteInputFieldText == "Delete") {
    deleteBtn.removeAttribute("disabled");
    deleteBtn.style.backgroundColor = "red"
  } else {
    deleteBtn.setAttribute("disabled", true);
    deleteBtn.style.color = ""
  }
  deleteBtn.addEventListener("click", () => {
    imgHeading.style.display = "none";
    deleteInputField.value = "";
  });
});
// Delete Section End
