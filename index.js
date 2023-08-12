/* Toogle icon navbar */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

/* Scroll section active link */
const sections = document.querySelectorAll('section')
const navigation = document.querySelectorAll('nav a')

window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY
        let offset = section.offsetTop - 150
        let height = section.offsetHeight
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navigation.forEach((links) => {
                links.classList.remove('active')
                document.querySelector('nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    /* Sticky Navbar */
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100)

    /* Remove toggle */
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}


/* Animated typing with Typed.js */
const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Web Developer', 'Job Seeker'],
    typeSpeed: 100,
    loop: true
})

/* Contact Form */ /* see Readme.MD */
const scriptURL = ''
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message sent successfully'
            setTimeout(() => {
                msg.innerHTML = ''
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
