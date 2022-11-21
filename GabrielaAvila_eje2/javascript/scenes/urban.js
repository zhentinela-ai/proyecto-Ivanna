import { BackButton } from "../components/backButton.js";

export class Urban extends Phaser.Scene {
  constructor() {
    super({ key: "urban" });
    this.backButton = new BackButton(this);
  }

  preload() {
    this.load.image("compras", "../../pictures/compras.jpg");
    this.backButton.preload();
  }

  create() {
    this.background = this.add.image(300, 300, "urban_hover");
    this.background.setDisplaySize(450, 450);
    this.backButton.create("mapa");

    this.lakeCompras = this.add.image(400, 360, "compras").setInteractive({
      useHandCursor: true,
    });
    this.lakeCompras.setDisplaySize(177, 100);
    this.lakeCompras.on("pointerdown", () => {
      this.showCompras();
    });

    this.add.text(300, 5, "Urbano", {
      fontFamily: "New Times Roman",
      fontSize: 50,
      color: "#000000",
    });
  }

  showCompras() {
    this.scene.start("compras");
  }
}
