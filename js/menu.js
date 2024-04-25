var activo=false;
let listener = false;

const nav = () => {
    const menu =  document.querySelector('.main-menu__icon');
    const navMenu = document.querySelector('.main-menu__nav ul');

    menu.addEventListener('click', ()=>{
        navMenu.classList.toggle('active');
        let header = this.document.getElementById("main-menu");
        header.classList.toggle("sticky");
        if(activo){
            activo=false;
        }
        else{
            activo=true;
        }
        if(this.window.scrollY>180){
            header.classList.toggle("sticky");
        }

        
    });

    if(window.innerWidth <= 1080 && listener == false)
    {
        var a=document.getElementsByClassName("main-menu__link");
        for (var i=0; i<a.length; i++) a[i].classList.remove("white");
        navMenu.addEventListener("click", ()=>
        {
            navMenu.classList.toggle('active');
            let header = this.document.getElementById("main-menu");
            header.classList.toggle("sticky");
            if(activo){
                activo=false;
            }
            else{
                activo=true;
            }
            if(this.window.scrollY>180){
                header.classList.toggle("sticky");
            }   

            let burger=document.querySelector(".main-menu__icon");
            burger.classList.toggle("on");
        });
        listener = true;
        
    }

    window.addEventListener("resize", () =>
    {
        if(window.innerWidth <= 1080)
        {
            var a=document.getElementsByClassName("main-menu__link");
            for (var i=0; i<a.length; i++) a[i].classList.remove("white");
        }
        if(window.innerWidth <= 1080 && listener == false)
        {
            
            navMenu.addEventListener("click", ()=>
            {
                navMenu.classList.toggle('active');
                let header = this.document.getElementById("main-menu");
                header.classList.toggle("sticky");
                if(activo){
                    activo=false;
                }
                else{
                    activo=true;
                }
                if(this.window.scrollY>180){
                    header.classList.toggle("sticky");
                }   

                let burger=document.querySelector(".main-menu__icon");
                burger.classList.toggle("on");
            });
            listener = true;
        }
        
            
    });

}
nav();

let burger=document.querySelector(".main-menu__icon");
burger.addEventListener('click', ()=>{
    burger.classList.toggle("on");
});

window.addEventListener("scroll", function(){


    let header = this.document.getElementById("main-menu");
    if(!activo){
        header.classList.toggle("sticky", this.window.scrollY > 180);
        header.classList.toggle("sticky-blur", this.window.scrollY > 1000);
        var a=document.getElementsByClassName("main-menu__link");
        for (var i=0; i<a.length; i++) a[i].classList.toggle("secondary",  this.window.scrollY > 180); 
        var a=document.getElementsByClassName("main-menu__link");
        if(window.innerWidth > 1080)
        {
            for (var i=0; i<a.length; i++) a[i].classList.toggle("white",  this.window.scrollY <= 180);
        }
         
    }
    else{
         
    }
            
});
