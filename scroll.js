window.addEventListener('scroll',function(){
    let navbar=document.querySelector('header');
    navbar.classList.toggle('navscroll',window.scrollY>100);
})