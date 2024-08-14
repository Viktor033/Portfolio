/*===================== icono de la barra de navegación ===================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===================== Activar sección al hacer scrol ===================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    /*===================== Barra de navegación fija ===================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*===================== Eliminar ícono  ===================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*===================== Revelar al hacer scroll  ===================*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.inicio-contenedor, .heading', { origin: 'top' });
ScrollReveal().reveal('.inicio-img, .Servicios-contenedor, .Portfolio-box, .Contacto form', { origin: 'bottom' });

ScrollReveal().reveal('.inicio-contenedor h1, .SobreMi-img', { origin: 'left' });

ScrollReveal().reveal('.inicio-contenedor p, .SobreMi-Contenedor', { origin: 'right' });

/*===================== sTypeado JS  ===================*/

const typed = new Typed('.multiple-text', {
    strings: ['Developer Java Web', 'Community Mannager', 'Diseñador grafico'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

/*===================== BOTON ENVIAR A WHATSAPP ================*/
const enviarFormulario = (event) => {
    event.preventDefault(); // Prevenir comportamiento predeterminado

    let nombres = document.getElementById('nombres').value;
    let mensaje = document.getElementById('Mensaje').value;
    let numero = "540379154636696";  // El número debe ser una cadena.

    if (nombres && mensaje) { // Asegúrate de que los campos no estén vacíos
        let url = `https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${encodeURIComponent(nombres)},%20Asunto:%20${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    } else {
        alert("Por favor, completa todos los campos antes de enviar.");
    }
}

document.getElementById("send").addEventListener('click', enviarFormulario);
