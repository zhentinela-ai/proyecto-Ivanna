import { BackButton } from "../components/backButton.js";

export class Lake extends Phaser.Scene {
  constructor() {
    super({ key: "lake" });
    this.backButton = new BackButton(this);
  }

  preload() {
    this.load.image("vida_silvestre", "./pictures/vidasil.jpg");
    this.backButton.preload();
    this.load.image("familia", "./pictures/familia.jpg");
  }

  create() {
    this.background = this.add.image(300, 300, "lake_hover");
    this.background.setDisplaySize(450, 450);
    this.backButton.create("mapa");

    this.lakeVidaSilvestre = this.add
      .image(420, 370, "vida_silvestre")
      .setInteractive({
        useHandCursor: true,
      });
    this.lakeVidaSilvestre.setDisplaySize(177, 100);
    this.lakeVidaSilvestre.on("pointerdown", () => {
      this.showVidaSilvestre();
    });

    this.familiaImage = this.add.image(260, 270, "familia").setInteractive({
      useHandCursor: true,
    });
    this.familiaImage.setDisplaySize(100, 100);
    this.familiaImage.on("pointerdown", () => {
      this.showFamilia();
    });

    this.add.text(300, 5, "Lago", {
      fontFamily: "New Times Roman",
      fontSize: 50,
      color: "#000000",
    });
  }

  showVidaSilvestre() {
    this.scene.start("vida_silvestre");
  }

  showFamilia() {
    this.scene.start("familia");
  }
}
