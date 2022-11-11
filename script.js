const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let coundownTitle = '';
let coundownDate = '';

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
}

countdownForm.addEventListener('submit', updateCountdown);