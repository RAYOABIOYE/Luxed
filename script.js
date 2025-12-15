const menuBtn = document.getElementById("menu-btn");
const dropdown = document.getElementById("mobile");

menuBtn.addEventListener('click', () =>{
    dropdown.classList.toggle('show');
    dropdown.classList.toggle('hide');

});