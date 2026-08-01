/* =====================================================
   LOPES STUDIO
   Interactive Experience
   ===================================================== */


/* ================= MOBILE MENU ================= */


const menuButton = document.querySelector(".menu-mobile");
const navigation = document.querySelector(".navigation");


if (menuButton) {


    menuButton.addEventListener("click", () => {


        navigation.classList.toggle("active");


        menuButton.classList.toggle("open");


    });


}





/* ================= CLOSE MOBILE MENU ================= */


const navigationLinks = document.querySelectorAll(".navigation a");


navigationLinks.forEach(link => {


    link.addEventListener("click", () => {


        navigation.classList.remove("active");


        menuButton.classList.remove("open");


    });


});







/* ================= FAQ ================= */


const faqButtons = document.querySelectorAll(".faq-question");



faqButtons.forEach(button => {


    button.addEventListener("click", () => {


        const item = button.parentElement;


        item.classList.toggle("active");



        const symbol = button.querySelector("span");



        if (item.classList.contains("active")) {


            symbol.textContent = "−";


        } else {


            symbol.textContent = "+";


        }



    });



});








/* ================= SCROLL ANIMATION ================= */


const animatedElements = document.querySelectorAll(
    ".service-card, .project-card, .process-step"
);



const observer = new IntersectionObserver(
    

    entries => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("show");


            }


        });


    },


    {


        threshold:0.15


    }



);




animatedElements.forEach(element => {


    observer.observe(element);


});








/* ================= HEADER EFFECT ================= */


const header = document.querySelector(".header");



window.addEventListener("scroll", () => {


    if(window.scrollY > 50){


        header.classList.add("scrolled");


    } else {


        header.classList.remove("scrolled");


    }


});








/* ================= SMOOTH BUTTONS ================= */


const buttons = document.querySelectorAll('a[href^="#"]');



buttons.forEach(button => {


    button.addEventListener("click", function(event){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            event.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});







/* ================= CONTACT FORM ================= */


const form = document.querySelector(".contact-form");



if(form){


    form.addEventListener("submit", event => {


        event.preventDefault();



        alert(
            "Obrigada pelo contato! A Lopes Studio recebeu sua mensagem."
        );



        form.reset();



    });



}