// Mobile menu

const toggle = document.getElementById("menu-toggle");

const nav = document.getElementById("nav");

toggle.addEventListener("click",()=>{

  nav.classList.toggle("active");

});

// Smooth scroll

document.querySelectorAll("nav a").forEach(anchor=>{

  anchor.addEventListener("click",function(e){

    e.preventDefault();

    nav.classList.remove("active");

    document.querySelector(this.getAttribute("href"))

      .scrollIntoView({behavior:"smooth"});

  });

});

// Counter animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

  const update=()=>{

    const target=+counter.getAttribute("data-target");

    const count=+counter.innerText;

    const increment=target/100;

    if(count<target){

      counter.innerText=Math.ceil(count+increment);

      setTimeout(update,20);

    } else{

      counter.innerText=target;

    }

  };

  update();

});

// Fake form

document.getElementById("contactForm").addEventListener("submit",function(e){

  e.preventDefault();

  alert("Poruka uspešno poslata!");

});