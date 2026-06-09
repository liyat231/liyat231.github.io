document.addEventListener('DOMContentLoaded', () => {
 const tri1 = document.querySelector('.upper');
 const tri2 = document.querySelector('.lower');
 const btn = document.getElementById('btn');
 const pbtn = document.getElementById('pbtn');


 if (btn) {
   btn.addEventListener('click', () => {
     if (tri1) tri1.style.animationPlayState = 'running';
     if (tri2) tri2.style.animationPlayState = 'running';
   });
 }


 if (pbtn) {
   pbtn.addEventListener('click', () => {
     if (tri1) tri1.style.animationPlayState = 'paused';
     if (tri2) tri2.style.animationPlayState = 'paused';
   });
 }
});




