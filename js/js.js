// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });

let btnLike = document.querySelectorAll("button.btn.likes");
btnLike = Array.from(btnLike);
btnLike = btnLike.map((elem) => elem.addEventListener("click", like));
// console.log(btnLike);

function like(e) {
  let p = e.target.parentNode.childNodes[3];
  let counter = +p.firstChild.textContent;

  counter -= -1;
  counter < 2
    ? (p.lastChild.textContent = ` Like`)
    : (p.lastChild.textContent = ` Likes`);
  p.firstChild.textContent = counter;
}
