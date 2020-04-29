const deleteButton = document.querySelector("#deleteButton");
const formDelete = document.querySelector("#formDelete");

deleteButton.addEventListener('click', function() {
    formDelete.submit();
})

formDelete.addEventListener("submit" , (event) => {
    const confirmation = confirm("Você realmente quer deletar esta receita?")

    if(!confirmation) {
        event.preventDefault();
    }
});