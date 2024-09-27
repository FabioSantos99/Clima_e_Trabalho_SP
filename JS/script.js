const form = document.getElementById('form');
const closeBtn = document.querySelector('#form .close-btn');
const accessClose = document.getElementById('access-close')

setTimeout (() => {
    form.style.display = 'block';
}, 30000);

closeBtn.addEventListener('click', () => {
    form.style.display = 'none';
});

accessClose.addEventListener('click', () => {
    form.style.display = 'none';
});