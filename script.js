let fashion = document.querySelectorAll('.fashion');
let index = 0;

function next(){
    fashion[index].classList.remove('active');
    index = (index + 1) % fashion.length;
    fashion[index].classList.add('active');
}
function prev(){
    fashion[index].classList.remove('active');
    index = (index - 1 + fashion.length) % fashion.length;
    fashion[index].classList.add('active');
}