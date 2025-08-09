function toggleMenu() {
    document.querySelector('.items')
    .classList.toggle('active');

}

const display = document.querySelector('.input-value');

function appendValue (value) {
    display.value += value;
    
}

function deleteValue () {
    display.value = '';
}

function cancelValue () {
    display.value = display.value.slice(0, -1);
}

function calculate () {
    try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval( expression);
    }
    catch {
        display.value = 'Errow';
    } 
    
}

function reciprocal() { // 1/x
    if (display.value) {
        display.value = 1 / parseFloat(display.value);
    }
}

function square () {
    if ( display.value) {
      display.value = Math.pow(parseFloat(display.value), 2)  
    }
}

function squareRoot() {
    if ( display.value) {
        display.value = Math.sqrt(parseFloat(display.value));
    }
}

function addSub() {
    if (display.value) {
        display.value = parseFloat(display.value) * -1;
    }
}

