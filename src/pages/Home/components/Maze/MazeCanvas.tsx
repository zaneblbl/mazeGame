/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-07 14:01:36
 * @Author: cell
 */
import React from 'react'
import Maze from './Maze'
import './MazeCss.scss'
interface Props{

}
interface State{

}

class MazeCanvas extends React.Component<Props,State>{
  Maze:Maze
  canvas:any
  constructor(Props:any){
    super(Props)
    this.canvas=document.getElementById('maze')
    this.Maze=new Maze(4,4)
  }

  render():any{
    return (
      <div>
        <canvas id='maze' width='800' height='600' className="maze__canvas"></canvas>
      </div>
    )
  }
}

export default MazeCanvas