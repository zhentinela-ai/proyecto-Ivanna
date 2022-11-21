import { BackButton } from "../components/backButton.js";

export class Familia extends Phaser.Scene {
  constructor() {
    super({ key: "familia" });
    this.backButton = new BackButton(this);
  }

  create() {
    this.background = this.add.image(300, 300, "familia");
    this.background.setDisplaySize(450, 450);
    this.backButton.create("lake");

    let text = `
                La población de Detroit Lakes es 9.255.
                Hay 832 personas por milla
                cuadrada, también conocida como densidad
                de población. La edad promedio en
                Detroit Lakes es 41,6, la edad promedio en 
                EE. UU. es 37,4. El número de
                personas por hogar en Detroit Lakes es 2,1, 
                el promedio estadounidense de
                personas por hogar es 2,6.
                `;
    this.add.text(-25, 280, text, {
      fontFamily: "New Times Roman",
      fontSize: 25,
      color: "#ffffff",
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: "#000000",
        blur: 3,
        stroke: true,
        fill: true,
      },
      align: "left",
    });
  }
}
