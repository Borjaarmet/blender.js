let estadoLicuadora = "apagada";
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let sonidoBtnLicuadora = document.getElementById("blender-btn-sound");

function controlarLicuadora() {
  if (estadoLicuadora == "apagada") {
    estadoLicuadora = "encendido";
    licuadora.classList.add("active");
    playSonido();
    console.log("encendida!!");
  } else {
    estadoLicuadora = "apagada";
    licuadora.classList.remove("active");
    playSonido();
    console.log("apagada");
  }
}
function playSonido() {
  if (sonidoLicuadora.paused) {
    sonidoBtnLicuadora.play();
    sonidoLicuadora.play();
  } else {
    sonidoBtnLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}
