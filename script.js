let menuicon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

let sections=document.querySelectorAll("section");
let navlinks=document.querySelector("header nava");

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute("id");
        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector("header nava a[href*="+id+"]").classList.add("active");
            })
        }
    })
}

menuicon.onclick=()=>{
    navbar.classList.toggle("active");
    menuicon.classList.toggle("bx-x");
}