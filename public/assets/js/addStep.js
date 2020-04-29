document.querySelector('#addStep').addEventListener('click', addStep);

function addStep() {
    console.log('foi')
    const steps = document.querySelector("#steps-container .groups");
    const fieldContainer = document.querySelectorAll("#steps-container .groups .group");
  
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") return false;
  
    newField.children[0].value = "";
    steps.appendChild(newField);
}