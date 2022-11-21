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

// configuración de la escena
let w,
  h = 0;
window.innerWidth > 640 ? ((h = 600), (w = 600)) : ((w = 300), (h = 300));

const config = {
  type: Phaser.AUTO,
  width: w,
  height: h,
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
new Phaser.Game(config);
