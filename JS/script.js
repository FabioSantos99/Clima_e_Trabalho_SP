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

document.getElementById('access-btn').onmouseover = function() {
    this.style.transform = 'scale(1.05)';
};
document.getElementById('access-btn').onmouseout = function() {
    this.style.transform = 'scale(1)';
};

