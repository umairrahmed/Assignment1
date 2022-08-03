window.addEventListener('scroll',function(){
    let navbar=document.querySelector('nav');
    navbar.classList.toggle('navscroll',window.scrollY>100);
})