import { Mapa } from "./mapa.js";

const config = {
  type: Phaser.CANVAS,
  width: 600,
  height: 600,
  scene: [Mapa],
  // physics: {
  //   default: "arcade",
  //   arcade: {
  //     gravity: { y: 40 },
  //     debug: false,
  //   },
  // },
};

var game = new Phaser.Game(config);
