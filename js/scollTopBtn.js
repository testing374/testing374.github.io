/*
Add a fixed right bottom button, when clicked scoll back to the top.
*/
{
const h = document.createElement("div");
const h2 = document.createElement("div");

h.style.backgroundColor='grey';
h.style.width='50px';
h.style.height='50px';
h.style.position='fixed';
h.style.right='100px';
h.style.bottom='100px';
h.style.display="none";
h.style.opacity="0.6";
h.style.cursor="pointer";
h.style.borderRadius="15px";

h2.innerHTML="&#11105;";
h2.style.fontSize="40px";
h2.style.color="white";
h2.style.textAlign="center";
h2.style.fontWeight="bold";
h2.style.transform="scale(1.5,1)";
h2.style.marginTop="-5px"



window.addEventListener("scroll",function(){
    if(window.scrollY > 50) {
        h.style.display="block"; 
    }else{
        h.style.display="none";
    }
});
h.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.body.appendChild(h);
h.appendChild(h2);
}
