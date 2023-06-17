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
  slidesPerView:1.2,
  spaceBetween:30,
  speed:800,
  observer:true,
  observeParents:true,
   breakpoints: {
   
    768: {
      slidesPerView: 3,
      spaceBetween: 56,
    },
    // when window width is >= 480px
     480: {
      slidesPerView: 2,
     },
 }
})  

const tabsBtn = document.querySelectorAll(".experience__nav-btn");
const tabsItems = document.querySelectorAll(".content-experience__body");
tabsBtn.forEach(function(item){
  item.addEventListener("click",function(){

   let currentBtn = item;
   let tabId = currentBtn.getAttribute("data-tab");
   let currentTab = document.querySelector(tabId);

   if( ! currentBtn.classList.contains('active')){
 tabsBtn.forEach(function(item){
      item.classList.remove('active');
      item.classList.remove('_icon-arrow');
   });

   tabsItems.forEach(function(item){
    item.classList.remove('active');
   });

   currentBtn.classList.add('active');
   currentBtn.classList.add('_icon-arrow');
   currentTab.classList.add('active');
   }

  
  });
});

document.querySelector('.experience__nav-btn').click();
   


