/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-07 14:01:36
 * @Author: cell
 */
import React from 'react'
import Maze from './Maze'
import './MazeCss.scss'

import Player from '../Player/Player'
interface Props {

}
interface State {
  playerList:Array<Player>
}

class MazeCanvas extends React.Component<Props, State>{
  Maze: Maze
  canvas: any
  width:number
  height:number
  state: State = {
    playerList:[]
  }
  constructor(Props: any) {
    super(Props)
    this.width=600
    this.height=600
    this.canvas = React.createRef();
    this.Maze = new Maze(30,30)
    this.Maze.generate()
  }

  componentDidMount() {
    this.canvasMap()
    this.initPlayer()
  }

  initPlayer(){
    let players=[]
    players.push(new Player({name:'hh',cellSize:this.width/this.Maze.columns}))
    this.setState({
      playerList:players
    })
    console.log(players);
    
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
    let cellWidth = this.width / this.Maze.columns
    let cellHeight = this.height / this.Maze.rows
    // translate 0.5像素，避免模糊
    // ctx.translate(0.5, 0.5)

    for (let i = 0; i < this.Maze.cells; i++) {
      let row:number = i / this.Maze.columns >> 0
      let column :number= i % this.Maze.columns
      let mapLinkedCell:any=linkedMap.get(i)
      // 右边的竖线
      if(column!==(this.Maze.columns-1) && (!mapLinkedCell || mapLinkedCell?.indexOf(i+1)<0)){
        ctx.moveTo((column+1)*cellWidth,row*cellHeight)
        ctx.lineTo((column+1)*cellWidth,(row+1)*cellHeight)
      }
      // 底部的横线
      if(row!==(this.Maze.rows-1) && (!mapLinkedCell || mapLinkedCell?.indexOf(i+this.Maze.columns)<0)){
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
        <canvas ref={this.canvas} width={this.width} height={this.height} className="maze__canvas"></canvas>
      </div>
    )
  }
}

export default MazeCanvas