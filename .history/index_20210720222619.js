document.getElementById('counter').style.textAlign = 'center';

//getting increment and decrement

let add = document.getElementById('increment');
let remove = document.getElementById('decrement');
let count = document.getElementById('startCounter');
//let start = document.getElementById('counter');

//adding the div in dom
/*const div1 = document.createElement('div');
const node = document.createTextNode('Beggining');
div1.appendChild(node);
div1.id = 'div1';
const mainBlock = document.getElementById('container');
mainBlock.appendChild(div1);*/

add.onclick = function() {
    let countPlus = count.innerHTML;
    if(+countPlus <= 3)
}