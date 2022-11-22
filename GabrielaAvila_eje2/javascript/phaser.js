// importar las escenas que se van a utilizar
import { Mapa } from "./scenes/mapa.js";
import { Lake } from "./scenes/lake.js";
import { VidaSilvestre } from "./scenes/vida_silvestre.js";
import { Familia } from "./scenes/familia.js";
import { Urban } from "./scenes/urban.js";
import { Natural } from "./scenes/natural.js";
import { Senderismo } from "./scenes/senderismo.js";
import { Aves } from "./scenes/aves.js";
import { Compras } from "./scenes/compras.js";
import { AvesFotos } from "./scenes/aves_fotos.js";

// Crear una variable para escalizar el mapa, para que se vea bien en cualquier dispositivo
let scale = NaN;
// Se cambia la posición del titulo y el tamañop del mapa, dependiendo del dispositivo
let title = document.getElementById("titulo");
window.innerWidth > 640
  ? (scale = 1)
  : ((scale = window.innerWidth / 650),
    (title.style.fontSize = "1.5rem"),
    (title.style.margin = "auto 0"));

window.addEventListener("resize", () => {
  window.location.reload();
});

// configuración de la escena
const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  zoom: scale,
  scene: [
    Mapa,
    Lake,
    VidaSilvestre,
    Familia,
    Urban,
    Natural,
    Senderismo,
    Aves,
    Compras,
    AvesFotos,
  ],
  parent: "contenido",
  backgroundColor: "#ffffff",
};

// crear el Mapa
const map = new Phaser.Game(config);
