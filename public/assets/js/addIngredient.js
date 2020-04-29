document.querySelector('#addIngredient').addEventListener('click', addIngredient);

function addIngredient() {
    const ingredients = document.querySelector("#ingredients-container .groups");
    const fieldContainer = document.querySelectorAll("#ingredients-container .groups .group");
  
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") return false;
  
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}