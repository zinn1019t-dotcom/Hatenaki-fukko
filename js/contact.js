document.addEventListener("DOMContentLoaded", () => {
 const reveals = document.querySelectorAll(".reveal");
 if (reveals.length > 0) {
   const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add("show");
       }
     });
   }, {
     threshold: 0.12
   });
   reveals.forEach((el) => observer.observe(el));
 }
});
