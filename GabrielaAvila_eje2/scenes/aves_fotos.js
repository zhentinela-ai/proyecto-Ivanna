import { BackButton } from "../components/backButton.js";

export class AvesFotos extends Phaser.Scene {
  constructor() {
    super({ key: "aves_fotos" });
    this.backButton = new BackButton(this);
  }

  preload() {
    this.load.image("aves_fotos", "./pictures/aves.jpg");
    this.backButton.preload();
  }

  create() {
    this.background = this.add.image(300, 300, "aves_fotos");
    this.background.setDisplaySize(450, 254);
    this.backButton.create("aves");
    let text = `
                Traiga sus binoculares para que pueda ver 
                básicamente todas las aves en Minnesota. 
                Detroit Lakes está ubicado en el corazón de
                una zona de transición entre la pradera de 
                pastos altos, la madera dura del norte y los
                ecosistemas de bosques de coníferas.
                ¡Esta diversidad de hábitat alberga más de 275 
                especies de aves! La observación de aves a 
                mediados de mayo es espectacular, así que 
                planifique su viaje de observación de aves al
                Festival de las Aves anual.
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
