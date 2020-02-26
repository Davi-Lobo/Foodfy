const items = document.querySelectorAll('.list .item');

for (let item of items) {
    item.addEventListener('click', function() {
        const recipeID = item.getAttribute('id');

        window.location.href = `/recipes/${recipeID}`;
    });
}