import { BackButton } from "../components/backButton.js";

export class Lake extends Phaser.Scene {
  constructor() {
    super({ key: "lake" });
    this.backButton = new BackButton(this);
  }

  // cargar los recursos de la escena, como el componente de botón de regreso
  preload() {
    this.load.image("vida_silvestre", "./pictures/vidasil.jpg");
    this.backButton.preload();
    this.load.image("familia", "./pictures/familia.jpg");
  }

  // actualizar la escena
  create() {
    // crear el fondo
    this.background = this.add.image(300, 300, "lake_hover");
    this.background.setDisplaySize(450, 450);
    this.backButton.create("mapa");

    // crear el botón de vida silvestre
    this.vidaSilvestreImage = this.add
      .image(420, 370, "vida_silvestre")
      .setInteractive({
        useHandCursor: true,
      });
    this.vidaSilvestreImage.setDisplaySize(177, 100);
    this.vidaSilvestreImage.on("pointerdown", () => {
      this.showVidaSilvestre();
    });

    // crear el botón de familia
    this.familiaImage = this.add.image(260, 270, "familia").setInteractive({
      useHandCursor: true,
    });
    this.familiaImage.setDisplaySize(100, 100);
    this.familiaImage.on("pointerdown", () => {
      this.showFamilia();
    });

    // añadir título de la escena
    this.add.text(300, 5, "Lago", {
      fontFamily: "New Times Roman",
      fontSize: 50,
      color: "#000000",
    });
  }

  // actualizar la escena
  showVidaSilvestre() {
    this.scene.start("vida_silvestre");
  }

  showFamilia() {
    this.scene.start("familia");
  }
}
