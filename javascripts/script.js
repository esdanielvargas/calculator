let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
    button.addEventListener('click',() => {
        let buttonSelect = button.textContent;

        if (button.id === "c") {
            screen.textContent = "0"
            return;
        }

        if (button.id === "borrar") {
            if (screen.textContent.length === 1 || screen.textContent === "Math Error!") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }
        
        if (button.id === "igual") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Math Error!";
            }
            return;
        }

        if (screen.textContent === "0" || screen.textContent === "Math Error!") {
            screen.textContent = buttonSelect;
        } else {
            screen.textContent += buttonSelect;
        }
    });
});