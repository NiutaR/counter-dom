document.getElementById('counter').style.textAlign = 'center';

//getting increment and decrement

let add = document.getElementById('increment');
let remove = document.getElementById('decrement');
let count = document.getElementById('startCounter');
let count2 = document.getElementById("num");
let number = 1;


add.onclick = function() {
    if (number <= 10) {
        number++;
        count.innerHTML = number;
        
    }
};

remove.onclick = function() {
    if (number >= 9) {
        number--;
        count.innerHTML = number;
    }
};


