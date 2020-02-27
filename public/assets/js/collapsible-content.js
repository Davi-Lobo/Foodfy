const buttons = document.querySelectorAll('.collapse-button');

const show = 'Mostrar';
const hide = 'Esconder';

for (let button of buttons) {

    button.textContent = show;

    button.addEventListener("click", function() {
        const target = document.querySelector('#'+button.getAttribute('target'));
        
        target.classList.toggle('collapsed');

        if (button.textContent == hide ) {
            button.textContent = show;
        } else {
            button.textContent = hide;
        }
    });
}