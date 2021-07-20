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
        count2.value = number;
    }
};

remove.onclick = function() {
    if (number >= 9) {
        number--;
        count.innerHTML = number;
        count2.value = number;
    }
};



/*let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("num");
let number = 1;
let price = 350;

buttonCountPlus.onclick = function() {
    if (number <= 3) {
        number++;
        count.innerHTML = number;
        count2.value = number * price;
    }
};

buttonCountMinus.onclick = function() {
   if (number >= 2) {
       number--;
       count.innerHTML = number;
       count2.value = number * price;
    }
};*/