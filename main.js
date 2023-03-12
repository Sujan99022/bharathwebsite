const scrollWrapper = document.querySelector('.scroll-wrapper');
const scrollContent = document.querySelector('.scroll-content');
let isScrolling;
scrollWrapper.addEventListener('scroll', function() {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(function() {
    scrollContent.style.transition = 'transform 0.5s ease-in-out';
  }, 100);
  scrollContent.style.transition = 'none';
  scrollContent.style.transform = `translateX(${-scrollWrapper.scrollLeft}px)`;
});

const app1=document.getElementById("app1")
const app2=document.getElementById("app2")
const app3=document.getElementById("app3")
const app4=document.getElementById("app4")
const app5=document.getElementById("app5")
const app6=document.getElementById("app6")
const app7=document.getElementById("app7")
const app8=document.getElementById("app8")
const app9=document.getElementById("app9")
const app10=document.getElementById("app10")
const app11=document.getElementById("app11")
const app12=document.getElementById("app12")
const app13=document.getElementById("app13")
const app14=document.getElementById("app14")
const app15=document.getElementById("app15")
const app16=document.getElementById("app16")
const app17=document.getElementById("app17")
const app18=document.getElementById("app18")
const app19=document.getElementById("app19")
const app20=document.getElementById("app20")
const app21=document.getElementById("app21")
const app22=document.getElementById("app22")
const app23=document.getElementById("app23")
const app24=document.getElementById("app24")




const ln = document.getElementById("loanNav");
const nn = document.getElementById("newsNav");
const bestearn = document.getElementById("bestearn");

bestearn.addEventListener('click', function () {
  app1.style.display = "none";
  app2.style.display = "none";
  app3.style.display = "block";
  app4.style.display = "none";
  app5.style.display = "none";
  app6.style.display = "none";
  app7.style.display = "none";
  app8.style.display = "none";
  app9.style.display = "none";
  app10.style.display = "none";
  app11.style.display = "none";
  app12.style.display = "none";
  app13.style.display = "none";
  app14.style.display = "none";
  app15.style.display = "none";
  app16.style.display = "none";
  app17.style.display = "none";
  app18.style.display = "none";
  app19.style.display = "none";
  app20.style.display = "none";
  app21.style.display = "none";
  app22.style.display = "none";
  app23.style.display = "none";
  app24.style.display = "none";
});
ln.addEventListener('click', function () {
  app1.style.display = "none";
  app2.style.display = "none";
  app3.style.display = "none";
  app4.style.display = "none";
  app5.style.display = "none";
  app6.style.display = "none";
  app7.style.display = "none";
  app8.style.display = "none";
  app9.style.display = "none";
  app10.style.display = "none";
  app11.style.display = "none";
  app12.style.display = "none";
  app13.style.display = "none";
  app14.style.display = "none";
  app15.style.display = "block"
  app16.style.display = "none";
  app17.style.display = "none";
  app18.style.display = "none";
  app19.style.display = "none";
  app20.style.display = "none";
  app21.style.display = "none";
  app22.style.display = "none";
  app23.style.display = "none";
  app24.style.display = "none";
});
nn.addEventListener('click', function () {
  app1.style.display = "none";
  app2.style.display = "none";
  app3.style.display = "none";
  app4.style.display = "none";
  app5.style.display = "none";
  app6.style.display = "block";
  app7.style.display = "none";
  app8.style.display = "none";
  app9.style.display = "none";
  app10.style.display = "none";
  app11.style.display = "none";
  app12.style.display = "none";
  app13.style.display = "none";
  app14.style.display = "none";
  app15.style.display = "none"
  app16.style.display = "none";
  app17.style.display = "none";
  app18.style.display = "none";
  app19.style.display = "none";
  app20.style.display = "none";
  app21.style.display = "none";
  app22.style.display = "none";
  app23.style.display = "none";
  app24.style.display = "none";
});

