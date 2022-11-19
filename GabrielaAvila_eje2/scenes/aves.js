import { BackButton } from "../components/backButton.js";

export class Aves extends Phaser.Scene {
  constructor() {
    super({ key: "aves" });
    this.backButton = new BackButton(this);
  }

  preload() {
    this.load.image("aves_fotos", "./pictures/aves.jpg");
    this.backButton.preload();
  }

  create() {
    this.background = this.add.image(300, 300, "aves_hover");
    this.background.setDisplaySize(450, 450);
    this.backButton.create("mapa");

    this.avesImage = this.add.image(200, 460, "aves_fotos").setInteractive({
      useHandCursor: true,
    });
    this.avesImage.setDisplaySize(177, 100);
    this.avesImage.on("pointerdown", () => {
      this.showAvesFotos();
    });

    this.add.text(300, 5, "Aves", {
      fontFamily: "New Times Roman",
      fontSize: 50,
      color: "#000000",
    });
  }

  showAvesFotos() {
    this.scene.start("aves_fotos");
  }
}
