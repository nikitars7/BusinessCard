 const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');
    if(iconMenu){
        iconMenu.addEventListener('click', (e) => {
         document.body.classList.toggle('lock');
         iconMenu.classList.toggle('active');
         menuBody.classList.toggle('active');
        })
    }



  let pageSlider = new Swiper('.portfolio__slider',{
   wrapperClass:"portfolio__wrapper",
   slideClass:"portfolio__slide",
  navigation: {
    nextEl: '.portfolio__arrow_right',
    prevEl: '.portfolio__arrow_left',
  },
  slidesPerView:3,
  spaceBetween:56,
  speed:800,
  observer:true,
  observeParents:true,
})  
   


