const saveButton = document.querySelector("#saveButton");
const recipeForm = document.querySelector("#recipeForm")

saveButton.addEventListener('click', function() {
    console.log('editou')
    recipeForm.submit();
});