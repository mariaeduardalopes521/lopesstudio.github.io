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



/* ================= CONTACT FORM EMAILJS ================= */


emailjs.init({
    publicKey: "auogYB9Srn9Pzc80y",
});



const form = document.querySelector("#contact-form");


const formStatus = document.querySelector("#form-status");



if(form){


    form.addEventListener("submit", function(event){


        event.preventDefault();



        emailjs.sendForm(
            "service_cd8fsvr",
            "template_irv072b",
            this
        )

        .then(() => {


            formStatus.textContent =
            "Mensagem enviada com sucesso! Entraremos em contato em breve.";


            formStatus.style.color = "green";


            form.reset();



        })


        .catch((error) => {


            console.log("Erro:", error);


            formStatus.textContent =
            "Não foi possível enviar sua mensagem. Tente novamente.";


            formStatus.style.color = "red";


        });



    });


}



