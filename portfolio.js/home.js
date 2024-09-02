const traduccion = {
    "es": {
        "title": "Hola, soy Daniel!",
        "career":"Desarrollador Web",
        "subtitle":"Gracias por tomarse un momento a mirar mi portfolio",
        "subtitle-name":"Mi nombre es Daniel Espinoza, reciente graduado en Tecnicatura Universitaria en Programacion en la Universidad Tecnologica Nacional (UTN - Mar del Plata)",
        "about-me":"Acerca de mi",
        "about-me-resume":"Durante la pandemia, y luego de tener una carrera de 10 años como profesional de la construcción como Maestro Mayor de Obras. Quise tomar otro rumbo en mi vida, y empecé a estudiar Programación, que siempre fue algo que me interesó aprender. <br>Es asi que en 2020 ingresé a la Universidad a encarar este desafio tan gratificante en el que aprendí muchas tecnologias (C, Java, Typescript, Angular) <br>como también soft skills ya que pude mejorar mi trabajo en equipo y la forma de trabajar con compañeros.",
        "education-title":"Educación:",
        "career-name":"Tecnicatura Universitaria en Programación",
        "tech-stacks-title":"Habilidades Tecnicas",
        "cv":"Mi CV",
        "cv-resume":"Este es mi curriculum completo, sientase libre en contactarme.",
        "cv-button":"Mi Curriculum",
        "cv-button-link":"https://drive.google.com/file/d/10kG9cjqXQMFtS-pC0b7-nQLM8ZPL3m8S/view?usp=sharing",
        "my-projects":"MIS PROYECTOS",
        "card-text":"Aries Bookshop es una tienda de libros la cual utiliza una API publica para obtener el listado de libros.<br>Está diseñado en Angular 17 y Bootstrap para el frontend.<br>El backend esta diseñado con Java y Springboot conectado a una base de datos MySQL para manejar el stock y los precios y el registro de usuarios.",
        "card-text-2":"(En proceso...)<br>Sistema de control de Aries Bookshop para crear, leer, modificar y borrar (CRUD) stock, contactos de proveedores y ventas con filtros y paginación<br>este proyecto es creado usando Angular 17 y Angular Material para el frontend, Java y Springboot para el backend<br>y MySQL como base de datos relacional-",
        "get-in-touch":"Ponte en contacto",
        "contact-name":"Nombre",
        "contact-message":"Mensaje",
        "contact-send":"Enviar"
    },
    "en": {
        "title": "Hello, I'm Daniel!",
        "career":"Web Developer",
        "subtitle":"Thanks for take a moment to look at my portfolio.",
        "subtitle-name":"My name is Daniel Espinoza, a recent graduated in University Technician in Programming at Universidad Tecnologica Nacional (UTN - Mar del Plata). ",
        "about-me":"About Me",
        "about-me-resume":"During the pandemic, and after having a 10-year career as a construction professional as Senior Master of Works. I wanted to take another direction in my life, and I started studying Programming, which was always something that I was interested in learning. <br>Thus, in 2020 I entered the University to face this very rewarding challenge in which I learned many technologies (C, Java, Typescript, Angular) <br>as well as soft skills since I was able to improve my teamwork and the way I work with colleagues.",
        "education-title":"Education",
        "career-name":"University Technician in Programming",
        "tech-stacks-title":"Tech Stacks",
        "cv":"My CV",
        "cv-resume":"This is my complete CV, feel free to contact me.",
        "cv-button":"My Curriculum",
        "cv-button-link":"https://drive.google.com/file/d/1UjuMF6HZyCtnf-iH-Xn03VlvnRpEtNsD/view?usp=drive_link",
        "my-projects":"MY PROJECTS",
        "card-text":"Aries Bookshop is a book store which uses a public API to get the list of books.<br>Is designed in Angular 17 and Bootstrap for the frontend.<br>The backend is designed with Java and Springboot connected to a MySQL database to manage stock and prices and user registration.",
        "card-text-2":"(In process...)<br>A managment system for Aries Bookshop to CRUD stock, suppliers contact and sales with filters and pagination<br>this project is created using Angular 17, Angular Material for the frontend, Java and Springboot for the Backend<br>and MySQL as relational database.",
        "get-in-touch":"Get in touch",
        "contact-name":"Name",
        "contact-message":"Message",
        "contact-send":"Send"
    }
};

const idioma = document.getElementById('language');

function actualizarIdioma(nuevoIdioma) {
    const bandera = idioma.querySelector('img');
    
    Object.keys(traduccion[nuevoIdioma]).forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            if (elemento.tagName === 'A') {
                elemento.textContent = traduccion[nuevoIdioma][id];
                elemento.href = traduccion[nuevoIdioma]["cv-button-link"];
            } else if (elemento.tagName === 'DIV' || elemento.tagName === 'P') {
                elemento.innerHTML = traduccion[nuevoIdioma][id];
            } else {
                elemento.textContent = traduccion[nuevoIdioma][id];
            }
        }
    });

    idioma.textContent = nuevoIdioma.includes('en') ? 'EN ' : 'ES ';

    bandera.src = nuevoIdioma.includes('en') 
        ? './images/flag-for-flag-united-kingdom-svgrepo-com.svg'
        : './images/flag-for-flag-spain-svgrepo-com.svg';

    idioma.appendChild(bandera);
}

idioma.addEventListener('click', (event) => {
    event.preventDefault();
    
    const nuevoIdioma = idioma.textContent.includes('EN') ? 'es' : 'en';
    
    actualizarIdioma(nuevoIdioma);
});

