// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

window.onscroll = function() {navbarHighlight()};

const navitems = document.querySelectorAll("nav ul li");
console.log(navitems)
const sections = document.querySelectorAll("section");

function navbarHighlight() {
    let current = "";

    sections.forEach( section => {
        sectionTop = section.offsetTop - 80;
        sectionHeight = section.clientHeight + 80;
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = section.getAttribute('id');
            console.log(current)
        } 
    })

    navitems.forEach( navitem => {
        navitem.classList.remove("active");
        if (navitem.classList.contains(current)) {
            navitem.classList.add("active");
            console.log(navitem.classList)
        }
    })
}