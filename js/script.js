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

   if(!currentBtn.classList.contains('active')){
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


const form = document.querySelector('.form');
const inputName = form.elements[0];
const formButton = document.querySelector('.form__button');
const inputNameError = document.createElement('span');
const inputEmailError = document.createElement('span');
const formItemName = document.getElementById('name');
const formItemEmail = document.getElementById('email');
const errorMessage = document.createElement('span');
inputName.addEventListener('change', (event) => {
   let eventValue = event.target.value;
   if(event.target.value.length < 1 || eventValue.trim() === ''){
      inputName.classList.add('error')
      if(!formItemName.contains(errorMessage)){
       errorMessage.innerHTML = 'Invalid name';
       formItemName.append(errorMessage)
      }
      if(inputName.classList.contains('green')){
   inputName.classList.remove('green')
 }
   }else{
      inputName.classList.remove('error')
      inputName.classList.add('green')
      if(formItemName.contains(errorMessage)){
      formItemName.removeChild(errorMessage)
      }
   }
})
const inputEmail = form.elements[1];
inputEmail.addEventListener('change',checkValue);

function checkValue (e) { 
 const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 if(!re.test(String(e.target.value).toLowerCase())){
 inputEmail.classList.add('error')
  if(!formItemEmail.contains(errorMessage)){
       errorMessage.innerHTML = 'Invalid email';
       formItemEmail.append(errorMessage)
      }
 if(inputEmail.classList.contains('green')){
   inputEmail.classList.remove('green')
 }
 }else{
    inputEmail.classList.remove('error')
     inputEmail.classList.add('green')
     if(formItemEmail.contains(errorMessage)){
      formItemEmail.removeChild(errorMessage)
      }
 }
}





