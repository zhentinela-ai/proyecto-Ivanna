// importar la función sleep, necesaria para esperar un tiempo
import { sleep } from "../sleep.js";

// crear clase Mapa
export class Mapa extends Phaser.Scene {
  constructor() {
    // asignar una clave a la escena
    super({ key: "mapa" });
    this.createVariables();
  }

  // precargar los recursos de la escena
  preload() {
    // asignar la carpeta de origen de los recursos
    this.load.path = "../map_pictures/";
    this.load.image(
      "background",
      window.innerWidth > 640 ? "detroit-lakes.png" : "detroit-lakes.png"
    );
    this.load.image("lake", "lake.png");
    this.load.image("lake_hover", "lake_hover.png");
    this.load.image("urban", "urban.png");
    this.load.image("urban_hover", "urban_hover.png");
    this.load.image("natural", "natural.png");
    this.load.image("natural_hover", "natural_hover.png");
    this.load.image("aves", "aves.png");
    this.load.image("aves_hover", "aves_hover.png");
  }

  // Crear las variables de la escena, para verlas en las diferentes resoluciones
  createVariables() {
    this.x_y = 800;
    this.w_h = 1600;
    // la varible reScale es para escalar las imágenes en función de la resolución, en este caso la imagen es de 2448x2448 y se escala a 600x600
    this.reScale = 0.245;
    this.urbanX = 222;
    this.urbanY = 208;
    this.naturalX = 456;
    this.naturalY = 130;
    this.avesX = 215;
    this.avesY = 490;
    this.lakeX = 317;
    this.lakeY = 432;
  }

  // crear la escena y sus objetos
  create() {
    // crear el fondo

    this.background = this.add
      .tileSprite(this.x_y, this.x_y, this.w_h, this.w_h, "background")
      .setInteractive();
    this.background.setTileScale(this.reScale, this.reScale);

    // función para crear las secciones del mapa
    const createSection = (x, y, key, key_hover) => {
      // crear la sección
      let section = this.add.image(x, y, key).setInteractive();

      // cambiar el tamaño de la sección y colocarle el cursor de mano, además colocarle un color de fondo
      let sectionHover = this.add.image(x, y, key_hover).setInteractive({
        useHandCursor: true,
      });
      sectionHover.setAlpha(0);

      // cuando el mouse pasa por encima de la sección, se muestra la sección con el color de fondo, gradualmente
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
    createSection(this.urbanX, this.urbanY, "urban", "urban_hover");
    createSection(this.naturalX, this.naturalY, "natural", "natural_hover");
    createSection(this.avesX, this.avesY, "aves", "aves_hover");
    createSection(this.lakeX, this.lakeY, "lake", "lake_hover");
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
