'use strict'

const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
  if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
    observer.unobserve(entries[j].target);
  }
  }
});
observer.observe(targets[i]);
}

const nav = document.querySelector('.nav-area')
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
  nav.classList.toggle('active')
});

const  navList = document.querySelectorAll('.nav > ul > li')
console.log(navList)

navList.forEach (el => {
  el.addEventListener('click', function() {
    nav.classList.remove('active')
  });
});