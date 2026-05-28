// Жолооч/Ажил олгогч сонгох
const roleBtns = document.querySelectorAll('.role-btn');
roleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        roleBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// ДАН товч бүхэнд
const danBtns = document.querySelectorAll('.dan-button');
danBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        alert('ДАН системтэй холбогдож байна...');
    });
});