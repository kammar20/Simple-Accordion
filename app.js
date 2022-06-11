const accordions = document.querySelectorAll('.content-Box');

for (let accordion of accordions) {
  accordion.addEventListener('click', function () {
    accordion.classList.toggle('active');
  });
}
