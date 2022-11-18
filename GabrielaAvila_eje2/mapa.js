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

    const createSection = (x, y, key, key_hover, scene) => {
      const section = this.add.image(x, y, key).setInteractive();
      section.on("pointerover", () => {
        section.setTexture(key_hover);
      });
      section.on("pointerout", () => {
        section.setTexture(key);
      });
      section.on("pointerdown", () => {
        this.scene.start(scene);
      });
    };

    createSection(100, 100, "lake", "lake_hover", "lake");
    
    this.urban = this.add.sprite(222, 208, "urban").setInteractive();
    
    this.urbanHover = this.add.sprite(222, 208, "urban_hover").setInteractive();
    this.urbanHover.setAlpha(0);

    this.urban.on("pointerover", async (event) => {
      for (let i = 0; i <= 100; i++) {
        this.urbanHover.setAlpha(i / 100);
        await sleep(3);
        this.urbanHover.scaleX += 0.00035;
        this.urbanHover.scaleY += 0.00035;
      }
    });
    this.urbanHover.on("pointerout", async (event) => {
      for (let i = 0; i <= 100; i++) {
        this.urbanHover.setAlpha(1 - i / 100);
        await sleep(3);
        this.urbanHover.scaleX -= 0.00035;
        this.urbanHover.scaleY -= 0.00035;
      }
    });

    // this.lake = this.add.sprite(317, 432, "lake").setInteractive();

    // this.lakeHover = this.add.sprite(317, 432, "lake_hover").setInteractive();
    // this.lakeHover.setAlpha(0);

    // function sleep(ms) {
    //   return new Promise((resolve) => setTimeout(resolve, ms));
    // }

    // this.lake.on("pointerover", async (event) => {
    //   for (let i = 0; i <= 100; i++) {
    //     this.lakeHover.setAlpha(i / 100);
    //     await sleep(3);
    //     this.lakeHover.scaleX += 0.0005;
    //     this.lakeHover.scaleY += 0.0005;
    //   }
    // });
    // this.lakeHover.on("pointerout", async (event) => {
    //   for (let i = 0; i <= 100; i++) {
    //     this.lakeHover.setAlpha(1 - i / 100);
    //     await sleep(3);
    //     this.lakeHover.scaleX -= 0.0005;
    //     this.lakeHover.scaleY -= 0.0005;
    //   }
    // });

    this.natural = this.add.sprite(456, 130, "natural").setInteractive();

    this.naturalHover = this.add
      .sprite(456, 130, "natural_hover")
      .setInteractive();
    this.naturalHover.setAlpha(0);

    this.naturalHover = this.add
      .sprite(456, 130, "natural_hover")
      .setInteractive();
    this.naturalHover.setAlpha(0);

    this.natural.on("pointerover", async (event) => {
      for (let i = 0; i <= 100; i++) {
        this.naturalHover.setAlpha(i / 100);
        await sleep(3);
        this.naturalHover.scaleX += 0.0005;
        this.naturalHover.scaleY += 0.0005;
      }
    });

    this.naturalHover.on("pointerout", async (event) => {
      for (let i = 0; i <= 100; i++) {
        this.naturalHover.setAlpha(1 - i / 100);
        await sleep(3);
        this.naturalHover.scaleX -= 0.0005;
        this.naturalHover.scaleY -= 0.0005;
      }
    });

    this.aves = this.add.sprite(215, 490, "aves").setInteractive();

    this.avesHover = this.add.sprite(215, 490, "aves_hover").setInteractive();
    this.avesHover.setAlpha(0);

    this.aves.on("pointerover", async (event) => {
      for (let i = 0; i <= 100; i++) {
        this.avesHover.setAlpha(i / 100);
        await sleep(3);
        this.avesHover.scaleX += 0.0005;
        this.avesHover.scaleY += 0.0005;
      }
    });

    this.avesHover.on("pointerout", async (event) => {
      for (let i = 0; i <= 100; i++) {
        this.avesHover.setAlpha(1 - i / 100);
        await sleep(3);
        this.avesHover.scaleX -= 0.0005;
        this.avesHover.scaleY -= 0.0005;
      }
    });

    // this.urban = this.add.sprite(300, 300, "urban");

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
