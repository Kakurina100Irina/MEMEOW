const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', () => {
  boxes.forEach(box => {
    const boxtop = box.getBoundingClientRect().top;
    const triggerbottom = window.innerHeight - 100;

    if (boxtop < triggerbottom) {
      box.classList.add("show");
    }
  });
});