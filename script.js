// Lightbox elemek
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

fetch('list.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById('gallery');

    // Itt rendezheted a képeket, pl. betűrendbe
    images.sort(); // Alapból ABC sorrend

    images.forEach(image => {
      const img = document.createElement('img');
      img.src = `img/${image}`;
      img.alt = image;
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('visible');
      });
      gallery.appendChild(img);
    });
  })
  .catch(error => {
    console.error('Hiba a képek betöltésekor:', error);
  });

// Lightbox bezárása kattintással
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('visible');
});
