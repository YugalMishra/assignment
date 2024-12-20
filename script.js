const toggle = document.getElementById('mode-toggle');
const body = document.body;

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved user preference, if any, on load of the website
document.addEventListener('DOMContentLoaded', (event) => {
    const darkMode = localStorage.getItem('darkMode');
    
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }
});


new Swiper('.card-wrapper', {  
    loop: true,  
    speed: 700,  
    spaceBetween: 30,  
  
    // If we need pagination  
    pagination: {  
      el: '.swiper-pagination',  
      clickable: true,  
      dynamicBullets: true,  
    },  
  
    // Navigation arrows  
    navigation: {  
      nextEl: '.swiper-button-next',  
      prevEl: '.swiper-button-prev',  
    },  
    
    breakpoints: { 
      0: {  
        slidesPerView: 1  
      },  
      768: {  
        slidesPerView: 2  
      },  
      1024: {  
        slidesPerView: 3  
      },  
    }  
  });  