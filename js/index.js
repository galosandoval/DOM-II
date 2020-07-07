// Your code goes here
const logo = document.querySelector('.logo-heading');
const navLinks = document.querySelectorAll('.nav-link');
const docH2s = document.querySelectorAll('h2');
const docPs = document.querySelectorAll('p');

const header = document.querySelector('.intro')
let funBus = header.querySelectorAll('img');

const imgContent = document.querySelectorAll('.img-content img')

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

for(let j = 0; j < navLinks.length; j++){
  navLinks[j].addEventListener('click', (event) => {
    navLinks[j].style.color = 'black'
}
  )}

for(let k = 0; k < navLinks.length; k++){
    navLinks[k].addEventListener('dblclick', event => {
        navLinks[k].style.color = 'blue'
    })
}
for(let l = 0; l < imgContent.length; l++){
    imgContent[l].onmouseenter = function(){
    imgContent[l].style.border = '5px dotted orange'
    }
    imgContent[l].onmouseleave = function(){
    imgContent[l].style.border = ''
    }
}

actualImg.onmouseenter = function(){
    actualImg.style.border = '5px dotted orange'
}

const pageFooterLoad = document.querySelector('footer');
window.addEventListener('load', (event) => {
    pageFooterLoad.style.backgroundColor = 'peachpuff';
});

const pageHeader = document.querySelector('header');
window.addEventListener('load', (event) => {
    pageHeader.style.backgroundColor = 'peachpuff'
})

colorLinks("brown");

function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}

document.querySelector(".nav-link").addEventListener("click", function(event) {
    document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
}, false);

// function handler(e) {
//     if(e.target === btn1) {
//       // selecting the 'a' element using 'getElementById'.
//       var a = document.getElementsByClassName('nav-link');
//       a.style.color = 'red';
//     } else {
//       // selecting the 'a' element using 'getElementsByClassName'.
//       var a = document.getElementsByClassName('some-class')[0];
//       a.style.color = 'green';
//     }
//   }

// for(let i = 0; i < navLinks.length; i++){
//   
//   navlinks[0].addEventListener('click', event => {
//       navLinks[0].style.color = 'blue'
//   });
// }
// function logSelection(event) {
//   const log = document.getElementById('log');
//   const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//   log.textContent = `You selected: ${selection}`;
// }

// const input = document.querySelector('input');
// docPs.addEventListener('select', logSelection());

// navLinks.addEventListener('keydown', function (eventObj) {
//     if (eventObj.key === 'Escape') {
//       eventObj.target.style.color = 'White'
//     }
//   })
// mouseTarget.addEventListener('mouseenter', e => {
//     mouseTarget.style.border = '5px dotted orange';
//     enterEventCount++;
//     addListItem('This is mouseenter event ' + enterEventCount + '.');
//   });