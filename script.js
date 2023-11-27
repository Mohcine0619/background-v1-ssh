//console.log(window.document);

const firstColorElt = document.getElementById('firstcolor');
//console.log(firstColorElt);
const secondColorElt = document.getElementById('secondcolor');
//récuperation de l'élément body
const bodyelt = document.querySelector("body");
console.log(bodyelt);
//

firstColorElt.addEventListener('input',function(){

//console.log(firstColorElt.value);
bodyelt.style="background: linear-gradient(to right,"+ firstColorElt.value +","+ secondColorElt.value +")"  ;
});

secondColorElt.addEventListener('input',function(){
    //console.log(secondColorElt.value);
    bodyelt.style= `background: linear-gradient(to right ,${firstColorElt.value}, ${secondColorElt.value} )`;
    });