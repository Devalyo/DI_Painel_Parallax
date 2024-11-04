const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const barrax = document.querySelector("#barraX");
const barray = document.querySelector("#barraY");
const barra = document.querySelector(".barra");
const textoCarta = document.querySelectorAll(".card__text");
const img1 = images.item(0);
const img2 = images.item(1);
const img3 = images.item(2);

const ghibli = document.querySelector("#ghibli");
var isFilm = false;

let timeout;

function switchCards() {
  
  if (isFilm) {
    document.body.style.background = "linear-gradient(to bottom, #ac843e, #5c4735)";

    img1.src="./assets/gogh.png"
    img1.style.height = "110%";
    img1.style.top = "14px"
    img1.style.right = "30px"
    backgrounds.item(0).style.background = "url('./assets/background1.png')"
    backgrounds.item(0).style.filter = "blur(2px)";
    
    img2.src="./assets/circe.png"
    img2.style.scale = "120%"
    img2.style.top = "3vh";
    backgrounds.item(1).style.background = "url('./assets/background2.png')"
    backgrounds.item(1).style.filter = "brightness(120%) blur(2px)";
    
    img3.src="./assets/borea.png"
    img3.style.top = "5px;"
    img3.style.left = "-1vw;"
    img3.style.height = "110%"
    backgrounds.item(2).style.background = "url('./assets/background3.png')"
    backgrounds.item(2).style.filter = "blur(0px) brightness(70%)";
    
  
    var palavra = document.querySelector(".textoCards")
    palavra.innerHTML = "Arte";
    palavra.style.color = "#ab643add";
    
    isFilm = false;
    return;
  }
  document.body.style.background = "linear-gradient(to bottom, #C6426E, #642B73)";
  
  img1.src="./assets/3dr_mono.png"
  img1.style.height = "110%";
  img1.style.top = "14px"
  img1.style.right = "-10px"
  backgrounds.item(0).style.background = "url('./assets/background_g1.jpg"
  backgrounds.item(0).style.filter = "blur(0px)";
  
  
  
  img2.src= "./assets/3dr_chihiro.png"
  img2.style.scale = "100%"
  img2.style.top = "25px";
  backgrounds.item(1).style.background = "url('./assets/background_g2.jpg"
  backgrounds.item(1).style.filter = "blur(0px)";

  img3.src="./assets/3dr_howlcastle.png"
  img3.style.height = "110%";
  img3.style.top = "5px"
  img3.style.right = "0"
  img3.style.left = "-4px"
  backgrounds.item(2).style.background = "url('./assets/background_g3.jpg"
  backgrounds.item(2).style.filter = "blur(0px) brightness(100%);";
  
  var palavra = document.querySelector(".textoCards")

  palavra.innerHTML = "Ghibli"
  palavra.style.color = "#C6426E"
  isFilm = true;

}


function translateCards()
{
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  
  timeout = window.requestAnimationFrame(() => {
    cards.style.transform = `rotateX(${barraX.value}deg) rotateY(${barray.value}deg)`;
    
    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${barraX.value * 0.25}px) translateY(${barray.value * 0.25}px)`;
    });
    
    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${barraX.value * 0.80}px ${barraY.value * 0.80}px`;
    });
  });
  
}

barra.addEventListener('input', translateCards, false);
ghibli.addEventListener("change", switchCards);