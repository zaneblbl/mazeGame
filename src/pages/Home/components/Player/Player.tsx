/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-08 16:51:05
 * @Author: cell
 */

class Player{
  name:string
  pos:Object
  cellSize:Number
  constructor(Props:any){
    this.cellSize=Props.cellSize
    this.name=Props.name
    this.pos={x:0,y:0}
  }
}

export default Player