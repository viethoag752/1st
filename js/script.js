// internal link active on scroll
let secs = document.querySelectorAll("section");
let internalLinks = document.querySelectorAll(".internal-link");
window.onscroll = () =>{
    secs.forEach((sec) =>{
        let scrolled = window.scrollY;
        let top = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(scrolled >= top && scrolled< top+height ){
            console.log(typeof top);
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
document.getElementById("message-form").addEventListener('submit', e =>{
        e.preventDefault();
})
const submitHandler = (e) => {  
    let isNameValidated = false;
    let isEmailValidated = false;
    let isMessageEmpty = false;
    let isMessageLengthValidated = false;
    let nameError = [];
    let emailError = [];
    let messageError = [];
    let alertMessage = "";
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let message = document.getElementById("Message").value;
    isNameValidated = (name.trim() !=="" ) ? true : false;
    isEmailValidated = (email.trim().includes("@") && email.trim().includes(".com") ) ? true : false;
    isMessageEmpty = (message.trim() !=="" ) ? true : false;
    isMessageLengthValidated = ( message.length > 10) ? true : false;

    if(!isNameValidated) nameError.push("Name is required.");      
    if(!isEmailValidated) emailError.push("Email is wrong format.");
    if(!isMessageEmpty) messageError.push("Message is required.");
    if(!isMessageLengthValidated) messageError.push("message length should be more than 10 characters.");


    if(isNameValidated && isEmailValidated && isMessageEmpty && isMessageLengthValidated) alertMessage = "Form submitted successfully!";
    else document.getElementById("Name").focus();
    document.getElementById("NameError").innerText = nameError.join(" ");
    document.getElementById("EmailError").innerText = emailError.join(" ");
    document.getElementById("MessageError").innerText = messageError.join(" ");
    document.getElementById("alertMessage").innerText = alertMessage;
}