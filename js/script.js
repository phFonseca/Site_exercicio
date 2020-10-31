function carregar() {

  let msg = document.querySelector("div#msg");
  let img = document.querySelector("img#img");

  let date = new Date();
  var hour = date.getHours();

  msg.innerHTML = `<p>Agora são ${hour} horas</p>`;

  if (hour >= 0 && hour < 12) {
    img.src="img/dia.png"
    document.body.style.background='rgb(160, 252, 191)';
  } else if (hour >= 12 && hour < 18) {
    img.src="img/tarde.png"
    document.body.style.background='rgb(230, 216, 97)'
  } else {
    img.src="img/noite.png"
    document.body.style.background='rgb(37, 36, 36)'
  }
}
