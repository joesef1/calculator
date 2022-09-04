const display = document.getElementById('display');
const bottons = Array.from(document.getElementsByClassName('buttons'));
const arrow = document.getElementsByClassName('arrow')[0].innerText


bottons.map(button => {
    button.addEventListener('click', function (e) {

        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';              
                break;
            
            case '=':
                display.innerText = eval(display.innerText);
                break;
            
            case '←':
                let slices = display.innerText.slice(0, -1)
                display.innerText=slices
                break;

            default:
                display.innerText += e.target.innerText;
            }
       

        
    }
    );
});

