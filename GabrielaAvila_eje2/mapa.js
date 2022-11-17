export class Mapa extends Phaser.Scene {
  constructor() {
    super({ key: "mapa" });
  }

  preload() {
    this.load.image("background", "map_pictures/detroit-lakes.png");
    this.load.image("lake", "map_pictures/lake1.png");
    this.load.image("urban", "map_pictures/urban1.png");
  }

  create() {
    this.background = this.add.tileSprite(800, 800, 1600, 1600, "background");
    this.background.setTileScale(0.245, 0.245);

    // this.lake = this.add.sprite(310, 432, "lake");
    this.lake = this.add.sprite(300, 300, "lake");
    this.lake.setScale(1, 1);
    this.lake.transparent = true;

    // this.urban = this.add.sprite(295, 316, "urban");
    this.urban = this.add.sprite(300, 300, "urban");

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
