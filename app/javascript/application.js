// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const nav = document.querySelector('.mobile-nav');
const showNav = document.querySelectorAll('.fa-bars');
const closeNav = document.querySelector('.X');
const li = document.querySelectorAll('.li');

const closeModal = function closeMenu() {
  nav.classList.add('hidden');
  // nav.style.width = "0vw";
  // nav.style.border= "0px solid rgba(10, 126, 251, 0)";
  // nav.style.boxShadow = "0 0px 0px rgba(20, 126, 251, 0)";
}

const openModal = function openMenu() {
  // nav.style.width = "75vw";
  nav.classList.remove('hidden');
  // nav.style.border= "1px solid rgba(10, 126, 251, 0.48)";
  // nav.style.boxShadow = "0 4px 30px rgba(20, 126, 251, 0.1)";
}

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', closeModal);
}
for (let x = 0; x < showNav.length; x++) {
  showNav[x].addEventListener('click', openModal);
}

closeNav.addEventListener('click',closeModal);


