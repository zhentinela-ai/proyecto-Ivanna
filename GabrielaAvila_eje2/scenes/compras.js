import { BackButton } from "../components/backButton.js";

export class Compras extends Phaser.Scene {
  constructor() {
    super({ key: "compras" });
    this.backButton = new BackButton(this);
  }

  preload() {
    this.backButton.preload();
  }

  create() {
    this.background = this.add.image(300, 300, "compras");
    this.background.setDisplaySize(450, 254);
    this.backButton.create("urban");

    let text = `
                Pasee por el centro histórico, con una taza de
                café en la mano, y deténgase para comprar en 
                encantadoras tiendas y boutiques locales. 
                Visite el Washington Square Mall para obtener
                aún más opciones y tal vez un poco de cuidado y
                esmalte de uñas. Agáchate por las calles 
                laterales y encuentra tesoros que no podrás 
                dejar pasar. No importa dónde visite,
                encontrará infinitas... oportunidades de compras...
                esperando en Detroit Lakes.
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
