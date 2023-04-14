// // Import stylesheets
import './style.css';

//links

let githubLink1 = document.querySelector('.github');
let githubLink2 = document.querySelector('.github2');

let linkedinLink = document.querySelector('.linkedin');

let aditionalContacts = document.querySelector('.aditionalContacts');

//add the res-btn to make a link
//have 2 btns with the same name, take a look at that later 

//
let resumen = document.querySelector('.res-btn');

let aboutMe = document.querySelector('.about');

let projects = document.querySelector('.projects');

let me = document.querySelector('.io');

// event listeners
githubLink1.addEventListener('click', function () {
  window.location.href = 'https://github.com/DickySosa';
});

githubLink2.addEventListener('click', function () {
  window.location.href = 'https://github.com/DickySosa';
});

linkedinLink.addEventListener('click', function () {
  window.location.href = ''; /*add link here*/
});

aditionalContacts.addEventListener('click', function () {
  window.location.href = ''; /*add link here*/
});

resumen.addEventListener('click', function () {
  window.location.href = './aboutMe.html'; /*add link here*/
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
