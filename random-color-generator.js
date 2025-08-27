function playRandomColorGenerator() {
   let bodyColor = document.querySelector('.mini-games');
   
        
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        bodyColor.style.backgroundColor = randomColor;
  
}