// // Import stylesheets
import './style.css';

//links

let githubLink = document.querySelector('.github');

let linkedinLink = document.querySelector('.linkedin');

let aditionalContacts = document.querySelector('.aditionalContacts');

//add the res-btn to make a link
let resumen = document.querySelector('.resumen');

let aboutMe = document.querySelector('.about');

let projects = document.querySelector('.projects');

let me = document.querySelector('.io');

// event listeners
githubLink.addEventListener('click', function () {
  window.location.href = 'https://github.com/DickySosa';
});

linkedinLink.addEventListener('click', function () {
  window.location.href = ''; /*add link here*/
});

aditionalContacts.addEventListener('click', function () {
  window.location.href = ''; /*add link here*/
});

resumen.addEventListener('click', function () {
  window.location.href = ''; /*add link here*/
});

aboutMe.addEventListener('click', function () {
  window.location.href = ''; /*add link here*/
});

projects.addEventListener('click', function () {
  window.location.href = ''; /*add link here*/
});

me.addEventListener('click', function () {
  window.location.href = ''; /*add link here*/
});

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
