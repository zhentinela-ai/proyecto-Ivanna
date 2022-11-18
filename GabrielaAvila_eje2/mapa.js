export class Mapa extends Phaser.Scene {
  constructor() {
    super({ key: "mapa" });
  }

  preload() {
    this.load.image("background", "map_pictures/detroit-lakes.png");
    this.load.image("lake", "map_pictures/lake.png");
    this.load.image("lake_hover", "map_pictures/lake_hover.png");
    this.load.image("urban", "map_pictures/urban.png");
    this.load.image("urban_hover", "map_pictures/urban_hover.png");
    this.load.image("natural", "map_pictures/natural.png");
    this.load.image("natural_hover", "map_pictures/natural_hover.png");
    this.load.image("aves", "map_pictures/aves.png");
    this.load.image("aves_hover", "map_pictures/aves_hover.png");
  }

  create() {
    this.background = this.add.tileSprite(800, 800, 1600, 1600, "background");
    this.background.setTileScale(0.245, 0.245);

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const createSection = (x, y, key, key_hover) => {

      let section = this.add.image(x, y, key).setInteractive();

      let sectionHover = this.add.image(x, y, key_hover).setInteractive();
      sectionHover.setAlpha(0);

      section.on("pointerover", async () => {
        for (let i = 0; i <= 100; i++) {
          sectionHover.setAlpha(i / 100);
          await sleep(3);
          sectionHover.scaleX += 0.00035;
          sectionHover.scaleY += 0.00035;
        }
      });

      sectionHover.on("pointerout", async () => {
        for (let i = 0; i <= 100; i++) {
          sectionHover.setAlpha(1 - i / 100);
          await sleep(3);
          sectionHover.scaleX -= 0.00035;
          sectionHover.scaleY -= 0.00035;
        }
      });
    };

    createSection(222, 208, "urban", "urban_hover");  
    createSection(317, 432, "lake", "lake_hover");
    createSection(456, 130, "natural", "natural_hover");
    createSection(215, 490, "aves", "aves_hover");

    // this.gameoverImage.visible = false;

    // this.caer = this.physics.add.image(400, 250, "aves").setInmovable();
    // this.caer.body.allowGravity = false;

    // this.cursors = this.input.keyboard.createCursorKeys();

    // this.caer.setVelocity(100, 90);

    // this.physics.add.collider(this.caer, this.gameoverImage);

    // this.caer.setBounds(1);
  }

  update() {
    // if (this.cursors.left.isDown) {
    //   this.caer.setVelocityX(-160);
    // } else if (this.cursors.right.isDown) {
    //   this.caer.setVelocityX(160);
    // } else {
    //   this.caer.setVelocityX(0);
    // }
    // if (this.cursors.up.isDown && this.caer.body.touching.down) {
    //   this.caer.setVelocityY(-330);
    // }
  }
}
