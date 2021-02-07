/*
* @Descripttion:
* @version:
* @Date: 2021-02-05 14:54:54
* @Author: cell
*/
import React from 'react'
import MazeCanvas from './components/Maze/MazeCanvas'
interface Props {

}

interface State {

}

class Home extends React.Component<Props, State>{
  constructor(Props: any) {
    super(Props)
  }
  render(): any {
    return (
      <div>
        <MazeCanvas></MazeCanvas>
      </div>
    )
  }
}
export default Home