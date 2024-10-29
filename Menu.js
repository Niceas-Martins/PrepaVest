document.addEventListener('DOMContentLoaded', function(){
    let ClickMenu = document.getElementById('menu')
    let navMenu = document.querySelector('.menu')   
 
 function toggleMenu(){
    navMenu.classList.toggle('active')
    ClickMenu.classList.toggle('active')
 }
 
 ClickMenu.addEventListener('click', toggleMenu)
 })