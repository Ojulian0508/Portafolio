const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
        }
    });

   
};
function toggle() {
    var menu = document.getElementById("menu");
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
    if (navbar.classList.contains("active")) {
        menu.classList.replace("bx-menu", "bx-x");
    } else {
        menu.classList.replace("bx-x", "bx-menu");
    }
}

var type=new Typed(".textline",{
    strings:["Full Stack Developer","Systems Technician"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


})

