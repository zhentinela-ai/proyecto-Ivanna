import { Mapa } from "./mapa.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  scene: [Mapa],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 40 },
      debug: false,
    },
  },
};

var game = new Phaser.Game(config);
