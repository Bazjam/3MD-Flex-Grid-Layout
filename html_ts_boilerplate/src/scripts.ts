const burger = document.querySelector('#burger');
const navMobile = document.querySelector('#nav-mobile');

burger.addEventListener('click',function(){
    burger.classList.toggle('open');  // toggle add / remove class html
    navMobile.classList.toggle('show');
});
