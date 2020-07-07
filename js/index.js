// Your code goes here
const logo = document.querySelector('.logo-heading');
const navLinks = document.querySelectorAll('.nav-link');
const docH2s = document.querySelectorAll('h2');
const docPs = document.querySelectorAll('p');

const header = document.querySelector('.intro')
let funBus = header.querySelectorAll('img');

const imgContent = document.querySelectorAll('.img-content')

const bottomImg = document.querySelector('.content-destination')
const actualImg = bottomImg.querySelector('img')

const buttons = document.querySelectorAll('.btn')
// console.log(imgContent)

logo.addEventListener('mouseover', (event) => {
  event.target.style.color = 'orange'
  setTimeout(function() {
    event.target.style.color = 'black';
  }, 500);
}, false)


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', event => {
      buttons[i].innerHTML = `Signed up: ${event.detail}`;
    });
}

imgContent.

mouseTarget.addEventListener('mouseenter', e => {
    mouseTarget.style.border = '5px dotted orange';
    enterEventCount++;
    addListItem('This is mouseenter event ' + enterEventCount + '.');
  });
  

