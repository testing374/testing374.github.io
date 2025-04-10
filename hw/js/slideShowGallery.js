{
const slideImg = ['image005-2', 'c-emeric-livinec-sete', 'mbs-merlion-day-1500x930', 'Kremlin', 'image015-1', 'cour-napoleon-et-pyramide'];
const container = document.querySelector('div.container');
const divRow = document.querySelector('div.row');
const imgName = ['聖誕老人村', '艾菲爾鐵塔', '魚尾獅公園', '克里姆林宮', '芬蘭城堡', '羅浮宮'];
//<div class="numbertext">${i} / 6</div>
for (let i = 6; i > 0; i--){
    const d = document.createElement('div');
    d.setAttribute('class', 'mySlides');
    d.innerHTML = `<img src="img/slideShow/${slideImg[i-1]}.jpg" style="width:100%">`;
    container.prepend(d);
    const dc = document.createElement('div');
    dc.setAttribute('class', 'column');
    dc.innerHTML = `<img class="demo cursor" src="img/slideShow/${slideImg[i-1]}.jpg" style="width:100%" onclick="currentSlide(${i})" alt="${imgName[i-1]}">`;
    divRow.prepend(dc);
  }
}
let slideIndex = 1;
showSlides(slideIndex);
plusSlides = n => { showSlides(slideIndex += n) };
currentSlide = n => { showSlides(slideIndex = n) };
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}