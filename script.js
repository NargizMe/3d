let input = document.querySelectorAll('input');
let pressed = false;


input.forEach((inp, i) => {
    // inp.getAttribute('data-val').addEventListener('keypress', ())
    inp.addEventListener('keyup', () => {
        input[i+1].focus();
    })
})


document.querySelector('#one').addEventListener('paste', (event) => {
    navigator.clipboard.readText().then((clipText) =>{
        let newArr = clipText.split('');
        newArr.forEach((el,i) => {
            input[i].value = el;
        })
    });
 });
