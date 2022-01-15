
let imgUrls=["https://i.pinimg.com/originals/26/17/1c/26171c962544194a5c6cb57802e78aca.jpg", "https://pbs.twimg.com/media/ERtuYoQWkAEhADU.jpg:large"
,"https://i.artfile.ru/3000x2000_810006_[www.ArtFile.ru].jpg","https://i.pinimg.com/originals/3b/e8/21/3be821b6d4ea684a3ceac429aaee12af.jpg",
"https://i.pinimg.com/originals/37/da/05/37da059bff7b1ea526568b4d3e86857d.jpg","https://i.pinimg.com/originals/20/e4/18/20e418d7a684c1b2ac95bd79b86b5f48.jpg",
"https://i.artfile.ru/1920x1280_778836_[www.ArtFile.ru].jpg","https://paultan.org/image/2017/06/Modenas_Pulsar_NS200-4-1-1200x800.jpg"];
// let imgUrls=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
let slider=document.querySelector('.slider');
window.addEventListener("load", function (){
    prntImg (); 
});
function prntImg () {
    for(let a=0;a<imgUrls.length;a++) {
        let imgs=document.createElement('img');
        imgs.className='img';
        imgs.src=imgUrls[a]
        slider.appendChild(imgs);
    }
};
   
  
