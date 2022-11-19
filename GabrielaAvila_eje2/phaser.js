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

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
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
    AvesFotos
  ],
  parent: "contenido",
  backgroundColor: "#ffffff",
};

new Phaser.Game(config);
