// importar la función sleep, necesaria para esperar un tiempo
import { sleep } from "../sleep.js";

// crear clase Mapa
export class Mapa extends Phaser.Scene {
  constructor() {
    // asignar una clave a la escena
    super({ key: "mapa" });
  }

  // precargar los recursos de la escena
  preload() {
    // asignar la carpeta de origen de los recursos
    this.load.path = "./map_pictures/";
    this.load.image("background", "detroit-lakes.png");
    this.load.image("lake", "lake.png");
    this.load.image("lake_hover", "lake_hover.png");
    this.load.image("urban", "urban.png");
    this.load.image("urban_hover", "urban_hover.png");
    this.load.image("natural", "natural.png");
    this.load.image("natural_hover", "natural_hover.png");
    this.load.image("aves", "aves.png");
    this.load.image("aves_hover", "aves_hover.png");
  }

  // crear la escena y sus objetos
  create() {
    // crear el fondo
    this.background = this.add
      .tileSprite(800, 800, 1600, 1600, "background")
      .setInteractive();
    this.background.setTileScale(0.245, 0.245);

    // función para crear las secciones del mapa
    const createSection = (x, y, key, key_hover) => {
      // crear la sección
      let section = this.add.image(x, y, key).setInteractive();

      // cambiar el tamaño de la sección y colocarle el cursor de mano, además colocarle un color de fondo
      let sectionHover = this.add.image(x, y, key_hover).setInteractive({
        useHandCursor: true,
      });
      sectionHover.setAlpha(0);

      // cuando el mouse pasa por encima de la sección, se muestra la sección con el color de fondo
      section.on("pointerover", async () => {
        for (let i = 0; i <= 100; i++) {
          sectionHover.setAlpha(i / 100);
          await sleep(3);
          sectionHover.scaleX += 0.00035;
          sectionHover.scaleY += 0.00035;
        }
      });

      // cuando el mouse sale de la sección, se oculta el color de fondo
      sectionHover.on("pointerout", async () => {
        for (let i = 0; i <= 100; i++) {
          sectionHover.setAlpha(1 - i / 100);
          await sleep(3);
          sectionHover.scaleX -= 0.00035;
          sectionHover.scaleY -= 0.00035;
        }
      });

      this.background.on("pointerout", () => {
        sectionHover.setAlpha(0);
      });

      // cuando se hace click en la sección, se muestra la escena correspondiente
      if (key === "lake") {
        sectionHover.on("pointerdown", () => {
          this.showLake();
        });
      } else if (key === "urban") {
        sectionHover.on("pointerdown", () => {
          this.showUrban();
        });
      } else if (key === "natural") {
        sectionHover.on("pointerdown", () => {
          this.showNatural();
        });
      } else if (key === "aves") {
        sectionHover.on("pointerdown", () => {
          this.showAves();
        });
      }
    };

    // crear las secciones del mapa, con la función createSection
    createSection(222, 208, "urban", "urban_hover");
    createSection(456, 130, "natural", "natural_hover");
    createSection(215, 490, "aves", "aves_hover");
    createSection(317, 432, "lake", "lake_hover");
  }

  // actualizar las escenas dependiendo de la sección que se haya seleccionado
  showLake() {
    this.scene.start("lake");
  }

  showUrban() {
    this.scene.start("urban");
  }

  showNatural() {
    this.scene.start("natural");
  }

  showAves() {
    this.scene.start("aves");
  }
}
