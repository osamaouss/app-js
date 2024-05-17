function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
document.getElementById('watermark').addEventListener('click', function() {
    window.open('popup.html', 'Popup', 'width=400,height=200');
});

function toggleDarkMode() {
    let calculator = document.querySelector('.calculator');
    let buttons = document.querySelectorAll('.buttons button');
    
    calculator.classList.toggle('dark-mode');
    
    buttons.forEach(function(button) {
        button.classList.toggle('dark-mode');
    });
}
document.getElementById('dark-mode-btn').addEventListener('click', toggleDarkMode);