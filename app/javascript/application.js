// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const nav = document.querySelector('.mobile-nav');
const showNav = document.querySelectorAll('.fa-bars');
const closeNav = document.querySelector('.X');
const li = document.querySelectorAll('.li');
const bars = document.querySelector('.fa-bars');

const closeModal = function closeMenu() {
  nav.classList.add('hidden');
  nav.style.width = "0vw";
  bars.style.display = "unset";
}

const openModal = function openMenu() {
  nav.style.width = "50vw";
  nav.classList.remove('hidden');
  bars.style.display = "none";
}

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', closeModal);

}
for (let x = 0; x < showNav.length; x++) {
  showNav[x].addEventListener('click', openModal);
}

closeNav.addEventListener('click',closeModal);


