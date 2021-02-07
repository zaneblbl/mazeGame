/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-07 14:01:36
 * @Author: cell
 */
import React from 'react'
import Maze from './Maze'
import './MazeCss.scss'
interface Props {

}
interface State {

}

class MazeCanvas extends React.Component<Props, State>{
  Maze: Maze
  canvas: any
  constructor(Props: any) {
    super(Props)
    this.canvas = React.createRef();
    this.Maze = new Maze(20,20)
    this.Maze.generate()
    console.log(this.Maze);
  }

  componentDidMount() {
    this.canvasMap()
  }

  canvasMap() {
    let canvas = this.canvas.current
    let ctx = canvas.getContext('2d')
    if (ctx) {
      this.draw(canvas, ctx)
    }
  }
  draw(canvas: any, ctx: any) {
    let linkedMap = this.Maze.linkedMap
    console.log(linkedMap);
    
    let cellWidth = canvas.width / this.Maze.columns
    let cellHeight = canvas.height / this.Maze.rows
    // translate 0.5像素，避免模糊
    // ctx.translate(0.5, 0.5)

    for (let i = 0; i < this.Maze.cells; i++) {
      let row:number = i / this.Maze.columns >> 0
      let column :number= i % this.Maze.columns
      let mapLinkedCell:any=linkedMap.get(i)
      if(column!==this.Maze.columns-1 && (!mapLinkedCell || mapLinkedCell?.indexOf(i+1)!=-1)){
        ctx.moveTo((column+1)*cellWidth,row*cellHeight)
        ctx.lineTo((column+1)*cellWidth,(row+1)*cellHeight)
      }
      if(row!==this.Maze.rows-1 && (!mapLinkedCell || mapLinkedCell?.indexOf(i+this.Maze.columns)!=-1)){
        ctx.moveTo(column*cellWidth,(row+1)*cellHeight)
        ctx.lineTo((column+1)*cellWidth,(row+1)*cellHeight)
      }
    }
    this.drawBorder(ctx,canvas.width,canvas.height)
    ctx.stroke()
  }
  drawBorder(ctx:any,width:number,height:number){
    ctx.moveTo(0,0)
    ctx.lineTo(width,0)
    ctx.moveTo(width,0)
    ctx.lineTo( width, height)
    ctx.moveTo( width-(width/ this.Maze.columns), height)
    ctx.lineTo(0,height)
    ctx.moveTo(0,height)
    ctx.lineTo(0,height/ this.Maze.rows)
  }

  render(): any {
    return (
      <div>
        <canvas ref={this.canvas} width='800' height='600' className="maze__canvas"></canvas>
      </div>
    )
  }
}

export default MazeCanvas