'use strict'

// fade
const targets = document.querySelectorAll('.fade');
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

// hamburger
const nav = document.querySelector('.nav-area')
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
  nav.classList.toggle('active')
});

const  navList = document.querySelectorAll('.nav > ul > li')

navList.forEach (el => {
  el.addEventListener('click', function() {
    nav.classList.remove('active')
  });
});


// submitBn
const submitBtn = document.getElementById('submitBtn');
console.log(submitBtn)

submitBtn.addEventListener('click', function(){
  this.setAttribute('disabled', true);
  this.style.color = 'black';
  this.style.backgroundColor = 'white';
  this.style.outline = '1px solid black';
  this.setAttribute('value', '送信しました')
});