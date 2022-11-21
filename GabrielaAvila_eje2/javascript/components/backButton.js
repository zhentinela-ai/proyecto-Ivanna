import { sleep } from "../sleep.js";

export class BackButton {
  constructor(scene, key) {
    this.relatedScene = scene;
  }

  preload() {
    this.relatedScene.load.spritesheet(
      "buttons",
      "../../map_pictures/back-buttons-tile.png",
      { frameWidth: 50, frameHeight: 50 }
    );
  }

  create(key) {
    // crear el botón de regreso
    this.startButton = this.relatedScene.add
      .sprite(550, 50, "buttons")
      .setInteractive({
        useHandCursor: true,
      });

    // animación del botón de regreso, cuando el mouse está sobre él
    this.startButton.on("pointerover", async () => {
      for (let i = 0; i < 6; i++) {
        this.startButton.setFrame(i);
        await sleep(100);
      }
    });

    // animación del botón de regreso, cuando el mouse sale de él
    this.startButton.on("pointerout", async () => {
      for (let i = 0; i < 6; i++) {
        this.startButton.setFrame(5 - i);
        await sleep(100);
      }
    });

    // función para regresar a la escena anterior, dependiendo de la escena en la que se encuentre el usuario
    this.startButton.on("pointerdown", () =>
      this.relatedScene.scene.start(key)
    );
  }
}
