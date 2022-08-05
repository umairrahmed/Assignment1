window.addEventListener('scroll',function(){
    let navbar=document.querySelector('header');
    navbar.classList.toggle('navscroll',window.scrollY>100);
})

window.addEventListener('scroll',function(){
    let navbar=this.document.querySelectorAll('ion-icon');
    navbar[0].classList.toggle('blackicon',window.scrollY>460);
    navbar[1].classList.toggle('blackicon',window.scrollY>475);
    navbar[2].classList.toggle('blackicon',window.scrollY>500);
    navbar[3].classList.toggle('blackicon',window.scrollY>535);


})



