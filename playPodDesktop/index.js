let custume_carousel = document.querySelector('.navbar');

custume_carousel.addEventListener("click", (event)=>{
  event.preventDefault();
  event.target.classList.add('.active');
});