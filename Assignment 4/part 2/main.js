// Mateo Awon-Magliaro
// 2025-03-25
// Description: Displays images on a webpage
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Image filenames and alt texts */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altTexts = [
  'Closeup of a human eye',
  'Rock that looks like a wave',
  'Purple and white pansies',
  'Section of wall from a pharaoh\'s tomb',
  'Large moth on a leaf'
];

/* Create thumbnails */
imageFilenames.forEach((filename, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', altTexts[index]);
    thumbBar.appendChild(newImage);
    
    /* Click handler for thumbnails */
    newImage.addEventListener('click', () => {
      displayedImage.src = newImage.src;
      displayedImage.alt = newImage.alt;
    });
  });

/* Darken/Lighten button */
btn.addEventListener('click', () => {
    const isDark = btn.getAttribute('class') === 'dark';
    btn.setAttribute('class', isDark ? 'light' : 'dark');
    btn.textContent = isDark ? 'Lighten' : 'Darken';
    overlay.style.backgroundColor = isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)';
  });
