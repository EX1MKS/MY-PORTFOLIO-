const menuToggle = document.querySelector('.buttons__burger');
const nav = document.querySelector('nav ul');
const checkbox = document.getElementById('burger'); // Perbaikan: Mendapatkan elemen checkbox dengan ID 'burger'

checkbox.addEventListener('click', function () {
    nav.classList.toggle('slide'); // Menambahkan/menghapus kelas 'slide' pada elemen <ul>
});

const items = document.getElementById("text");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // Perbaikan: Pastikan 'front' dideklarasikan jika digunakan
    // front.style.right = value * 0.2;
});