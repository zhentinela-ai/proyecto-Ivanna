import { BackButton } from "../components/backButton.js";

export class VidaSilvestre extends Phaser.Scene {
  constructor() {
    super({ key: "vida_silvestre" });
    this.backButton = new BackButton(this);
  }

  create() {
    this.background = this.add.image(300, 300, "vida_silvestre");
    this.background.setDisplaySize(450, 254);
    this.backButton.create("lake");

    // añadir texto de información de la escena
    let text = `
                Salga de la ciudad y reconéctese 
                con su lado salvaje en Detroit Lakes.
                Tenemos tres bosques estatales,
                tres parques estatales, dos refugios
                nacionales de vida silvestre y más 
                de 70,000 acres de áreas silvestres 
                en nuestro patio trasero listas 
                para explorar.
                `;
    // añadir texto de información de la escena, configurado para que se vea bien
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
