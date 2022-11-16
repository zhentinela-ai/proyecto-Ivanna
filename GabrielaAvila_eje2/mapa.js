export class Mapa extends Phaser.Scene {
  constructor() {
    super({ key: "mapa" });
  }

  preload() {
    this.load.image("background", "pictures/fondodetroit.jpg");
    this.load.image("aves", "pictures/aves.jpg");
  }

  create() {
    this.add.image(400, 250, "background");
    this.gameoverImage = this.add.image(0, 0, "aves");
    this.gameoverImage.visible = false;

    this.caer = this.physics.add.image(400, 250, "aves").setInmovable();
    this.caer.body.allowGravity = false;

    this.cursors = this.input.keyboard.createCursorKeys();

    // this.caer.setVelocity(100, 90);

    // this.physics.add.collider(this.caer, this.gameoverImage);

    // this.caer.setBounds(1);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.caer.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.caer.setVelocityX(160);
    } else {
      this.caer.setVelocityX(0);
    }

    if (this.cursors.up.isDown && this.caer.body.touching.down) {
      this.caer.setVelocityY(-330);
    }
  }
}
