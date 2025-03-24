// Mateo Awon-Magliaro
// Date created: 2025-03-24
// Description: Random story generator


// variables and functions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}