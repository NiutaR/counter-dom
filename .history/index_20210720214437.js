document.getElementById('container').style.textAlign = 'center';

//getting increment and decrement

let add = document.getElementById('increment');
let remove = document.getElementById('decrement');


//adding the div in dom
const div1 = document.createElement('div');
const node = document.createTextNode('Beggining');
div1.appendChild(node);
div1.id = 'div1';
