import { BackButton } from "../components/backButton.js";

export class Senderismo extends Phaser.Scene {
  constructor() {
    super({ key: "senderismo" });
    this.backButton = new BackButton(this);
  }

  preload() {
    this.backButton.preload();
  }

  create() {
    this.background = this.add.image(300, 300, "bosques");
    this.background.setDisplaySize(450, 254);
    this.backButton.create("natural");

    let text = `
                Manténgase dentro de los límites de la ciudad
                y pasee por los tres parques de la ciudad. 
                Traiga a su perro a nuestro parque para 
                perros de la ciudad. Explore 117 acres 
                de pantanos, arroyos de truchas, senderos 
                pantanosos, refugios, bosques y praderas
                en Sucker Creek Preserve. O aventúrese 
                fuera de la ciudad a nuestro parque del condado 
                y más allá.
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
