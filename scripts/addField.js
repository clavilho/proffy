document.querySelector("#add-time").addEventListener("click", cloneField);

function cloneField() {
  let newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);

  let fields = newFieldContainer.querySelectorAll("input");
  fields.forEach((field) => {
    field.value = "";
  });

  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
