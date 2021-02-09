/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-08 16:51:05
 * @Author: cell
 */

class Player {
  name: string
  pos: object
  cellSize: number
  radius: number
  color: string
  canvas: any
  ctx: any
  speed:number
  constructor(Props: any) {
    this.cellSize = Props.cellSize
    this.radius = this.cellSize / 4
    this.name = Props.name
    this.speed=Props.speed || 1
    this.canvas = Props.canvas
    this.pos = { x: this.radius * 2, y: this.radius * 2 }
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
    this.ctx = this.canvas.getContext('2d')
    this.move()
  }
  draw() {
    let ctx = this.ctx
    ctx.beginPath();
    ctx.fillStyle = this.color
    ctx.arc(this.pos['x'], this.pos['y'], this.radius, 0, Math.PI * 2, true)
    ctx.closePath();
    ctx.fill()
  }
  move() {
    let self = this
    this.draw()
    // ctx.clearRect(this.pos['x']-this.radius, this.pos['y']-this.radius, this.radius*2, this.radius*2);
    document.onkeydown = function (event) {
      var e = event || window.event || arguments.callee.caller.arguments[0];

      if (e && e.keyCode == 38) {//上
        self.pos['y'] -= self.speed
      }
      if (e && e.keyCode == 40) {//下
        self.pos['y'] += self.speed
      }
      if (e && e.keyCode == 37) {//左
        self.pos['x'] -= self.speed
      }
      if (e && e.keyCode == 39) {//右
        self.pos['x'] += self.speed
      }

      console.log(self.pos);
      
      
    };
  }
}

export default Player