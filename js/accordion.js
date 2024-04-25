const accordions = document.querySelectorAll(".accordion__box");

accordions.forEach(element => {
    element.addEventListener("click", (e) =>
    {

        const parent = e.currentTarget.children[1];
        parent.classList.toggle("visible");
        e.currentTarget.children[0].children[1].classList.toggle("chev-inv");
    }); 
});