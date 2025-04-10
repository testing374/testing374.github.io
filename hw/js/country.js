'use strict';

// get html file name
const path = document.location.pathname;
const country = path.substring(path.lastIndexOf('/')+1).split('.')[0];

// title
const title = {'finland': '芬蘭', 'france': '法國', 'singapore': '新加坡', 'russia': '俄羅斯'};
document.title = title[country];

// background colour
/* const bgColor = {'finland': '#E3F2FD', 'france': 'white', 'singapore': '#EBF0D6', 'russia': '#FFE6E6'};
document.body.style.backgroundColor = bgColor[country]; */

// youtube
/* const yt = {
    'finland': '3KyQ5RutQo4?si=b47Y03MzAoWqsewD',
    'france' : 'USIXkcj1U_c?si=I_-sXhantwqxdU2w',
    'singapore': 'xTfoBCqo-v8?si=5IGNF7RjqKjpUyjL',
    'russia': 'pxpn_Zojexg?si=hoBuLlqMmdzH_OHd' 
};
document.getElementsByTagName('iframe')[0].setAttribute('src', "https://www.youtube.com/embed/"+yt[country]); */

// national flag
const flag = {
    'finland': 'finland/Flag_of_Finland.svg.png',
    'france' : 'france/Flag_of_France.png',
    'singapore': 'singapore/Flag_of_Singapore.svg.png',
    'russia': 'russia/Flag_of_Russia.svg.png' 
};
document.getElementById('flag').src = 'img/'+flag[country];

// useful information (text) in DIV grid-item2
const gi2 = document.getElementsByClassName('grid-item2')[0];
usefulInfo[country].forEach( x => {
    const p = document.createElement('p');
    p.innerText = x;
    gi2.appendChild(p);
})



const hideClose = document.getElementById('hideTop');
const innerDiv = hideClose.children[0];
// close top DIV by outside click
innerDiv.addEventListener('click', ev=>{
    ev.stopPropagation();
});
hideClose.addEventListener('click', ()=>{
    hideClose.setAttribute('style', 'display: none');
});

// append all img in grid-item3 DIV, imgSrc from 'that-nation'.js
const hCimg = innerDiv.getElementsByTagName('img')[0];
const hCp = innerDiv.getElementsByTagName('p')[0];
for (let i of imgSrc[country]) {
    const d = document.createElement('div');
    d.className = 'gridImg';
    const dd = document.createElement('img');
    dd.setAttribute('src', `img/${country}/${i[0]}.jpg`);
    // onclick displays hideTopDiv with corresponding pic and text
    dd.addEventListener('click', ()=>{
        hCimg.setAttribute('src', `img/${country}/${i[0]}.jpg`);
        hCp.innerText = i[3];
        hideClose.setAttribute('style', 'display: block');
    });
    d.appendChild(dd);
    const ddd = document.createElement('h4');
    ddd.innerText = i[1];
    d.appendChild(ddd);
    document.getElementsByClassName('grid-item3')[0].appendChild(d);
}


// append footer
const foo = document.createElement('footer');
foo.innerHTML = "<code>&copy;旅遊資訊網 2024&nbsp;</code>";
document.body.append(foo);
