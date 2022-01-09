
let imgUrls=["https://i.pinimg.com/originals/26/17/1c/26171c962544194a5c6cb57802e78aca.jpg", "https://pbs.twimg.com/media/ERtuYoQWkAEhADU.jpg:large"
,"https://i.artfile.ru/3000x2000_810006_[www.ArtFile.ru].jpg","https://i.pinimg.com/originals/3b/e8/21/3be821b6d4ea684a3ceac429aaee12af.jpg",
"https://i.pinimg.com/originals/37/da/05/37da059bff7b1ea526568b4d3e86857d.jpg","https://i.pinimg.com/originals/20/e4/18/20e418d7a684c1b2ac95bd79b86b5f48.jpg",
"https://i.artfile.ru/1920x1280_778836_[www.ArtFile.ru].jpg","https://paultan.org/image/2017/06/Modenas_Pulsar_NS200-4-1-1200x800.jpg"];
let container=document.querySelector (".container");
// let imgUrls=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var i=0; // индекс текущего элемента в массиве
window.addEventListener("load", function (){
let progress=document.getElementById ("progress");
    prntImg ();
    progress.value=1;
    progress.max=imgUrls.length;
    console.log(progress);
    document.querySelector (".back").addEventListener("click", pressBack);
    document.querySelector (".forw").addEventListener("click", pressForw);  
});

function prntImg () {
    for(let a=0;a<3;a++) {
        let imgs= document.createElement('img');
        if(a==1) imgs.id="main";
        imgs.className='img';
        container.appendChild (imgs);
    }
};
function pressBack (){
    progress.value++;
    document.querySelectorAll ('.img')[0].src=imgUrls [i % imgUrls.length];
    document.querySelectorAll ('.img')[1].src=imgUrls [(i+1) % imgUrls.length];
    document.querySelectorAll ('.img')[2].src=imgUrls [(i+2) % imgUrls.length];
    console.log((i+1)%imgUrls.length);
    i++;
    if (i==imgUrls.length){
        progress.value=1;
        i=0;
    }   
};

function pressForw (){
    progress.value--;
    document.querySelectorAll ('.img')[2].src=imgUrls [i % imgUrls.length];
    document.querySelectorAll ('.img')[1].src=imgUrls [Math.abs((i-1) % imgUrls.length)];
    document.querySelectorAll ('.img')[0].src=imgUrls [Math.abs((i-2) % imgUrls.length)];
    console.log((i-2)%imgUrls.length);
    i--;
    if (i<0){
        i=imgUrls.length;
        return;
    }
};