const navbarUL = document.querySelector(".navbar__ul")
const xIcon = document.querySelector(".navbar__x")
const hamburgerIcon = document.querySelector(".hamburger__navbar")
const firstPageContainer = document.querySelector(".container")


const secondSection = document.querySelector(".second__section")

const form = document.getElementById("form")
const sender = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")

hamburgerIcon.addEventListener("click", () => {
    navbarUL.classList.toggle("ul__inactive")
    xIcon.classList.toggle("not__active")
    hamburgerIcon.classList.toggle("not__active")
    secondSection.classList.toggle("not__active")
})


xIcon.addEventListener("click", () => {
    navbarUL.classList.toggle("ul__inactive")
    xIcon.classList.toggle("not__active")
    hamburgerIcon.classList.toggle("not__active")
    secondSection.classList.toggle("not__active")
})


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const templateParams = {
        sender: sender.value,
        email: email.value,
        message: message.value,
    };

    emailjs.send('service_q83x05s', 'template_wle2anc', templateParams, "1iqi5gSawssZ1Xp36")
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text, response, templateParams);
            sender.value = "";
            email.value = "";
            message.value = "";
            // Here the content of the button should be changed or some notification that the e-mail has been succesfully sent
        })
        .catch(function (error) {
            console.log('FAILED...', error);
        });
});

function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
    }
}

const navLinks = document.querySelectorAll('.navbar__links');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        smoothScroll(targetId);
    });
});



