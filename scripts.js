  $(function () {
      $('.portfolioGallery').flickity({
          wrapAround: true
      });
  }); 

const mobileMenu = document.querySelector('.hiddenNav');  
const navItems = document.querySelectorAll('.navList')

mobileMenu.addEventListener('click', function(){
    navItems.forEach(item => {
        item.classList.toggle('clicked') 
     
    });
})