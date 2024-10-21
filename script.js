document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.querySelector('.main-image');
    const coracao = document.querySelector('.heart-image');


    imagem.addEventListener('mouseover', () => {
        imagem.style.opacity = '0.5';
    });

    imagem.addEventListener('mouseout', () => {
        imagem.style.opacity = '1'; 
    });

    coracao.addEventListener('mouseover', () => {
        coracao.style.transform = 'scale(1.2)';
    });

    coracao.addEventListener('mouseout', () => {
        coracao.style.transform = 'scale(1)'; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-image');

    projectImages.forEach((image) => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)'; 
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)'; 
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    const toggleButton = document.getElementById('dark-mode-toggle');
  
    
    toggleButton.addEventListener('click', function() {
     
      document.body.classList.toggle('dark-mode');
  
      
      if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
      } else {
        this.textContent = 'Modo Escuro';
      }
    });
  });
  
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const logo = document.getElementById('logo');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      logo.src = 'logo_dark.png';
    } else {
      logo.src = 'logo_dark.png';
    }
  });



  