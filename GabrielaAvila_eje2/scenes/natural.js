import { BackButton } from "../components/backButton.js";

export class Natural extends Phaser.Scene {
  constructor() {
    super({ key: "natural" });
    this.backButton = new BackButton(this);
  }

  preload() {
    this.load.image("bosques", "./pictures/bosques.jpg");
    this.backButton.preload();
  }

  create() {
    this.background = this.add.image(300, 300, "natural_hover");
    this.background.setDisplaySize(450, 450);
    this.backButton.create("mapa");

    this.naturalVidaSilvestre = this.add
      .image(430, 220, "bosques")
      .setInteractive({
        useHandCursor: true,
      });
    this.naturalVidaSilvestre.setDisplaySize(177, 100);
    this.naturalVidaSilvestre.on("pointerdown", () => {
      this.showSenderismo();
    });

    this.add.text(300, 5, "Natural", {
      fontFamily: "New Times Roman",
      fontSize: 50,
      color: "#000000",
    });
  }

  showSenderismo() {
    this.scene.start("senderismo");
  }
}
