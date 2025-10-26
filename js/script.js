// internal link active on scroll
let secs = document.querySelectorAll("section");
let internalLinks = document.querySelectorAll(".internal-link");
window.onscroll = () =>{
    secs.forEach((sec) =>{
        let scrolled = window.scrollY;
        let top = sec.offsetTop-300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(scrolled >= top && scrolled< top+height ){
            internalLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('a[href*='+id+']').classList.add('active');
            })
        }
    })
}
// mobile nav toggle
const navToggleHandler = () => {
    let nav = document.querySelector(".nav-mobile");
    let navOverlay = document.querySelector("#nav-overlay");
    console.log("clicking");
    if(nav.style.transform === "translateX(0%)"){
        navOverlay.style.display = "none";
        nav.style.transform = "translateX(100%)";
    }else{
        navOverlay.style.display = "block";
        nav.style.transform = "translateX(0%)";
    }
}

