/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-05 16:13:20
 * @Author: cell
 */


import { UnionSet } from '@/utils/algorithm'

class Maze {
  columns: number
  cells: number
  rows: number
  linkedMap: Object
  unionSet: UnionSet
  constructor(columns: number, rows: number) {
    this.columns = columns
    this.rows = rows
    this.cells = columns * rows
    //  存放联通的格子，{1:[2,11]}表示第1个和2,11联通
    this.linkedMap = {}
    //  初始化连通集
    this.unionSet = new UnionSet(this.cells)
  }
  //  创建
  generate(): any {
    //  判断第一个是否与最后一个格子连通，如果不是的话，则每次随机选取两个相邻的格子，如果它们不在同一个连通集，则把它们连通一下，同时记录一下拆掉的墙到linkedMap里面
    while (!this.firstLastLinked()) {
      let cellPairs = this.pickRandomCellPairs()
      if (!this.unionSet.sameSet(cellPairs[0], cellPairs[1])) {
        this.unionSet.union(cellPairs[0], cellPairs[1])
        this.addLinkedMap(cellPairs[0], cellPairs[1])
      }
    }
  }
  // 第一个和最后一个格子是否联通
  firstLastLinked(): Boolean {
    return this.unionSet.sameSet(0, this.cells)
  }
  //  随机选取相邻的两个格子
  pickRandomCellPairs(): Array<any> {
    let randomDoubleCell: Array<any> = []
    let randomCell:any=Math.ceil(Math.random()*this.cells)
    console.log(randomCell);
    
    return randomDoubleCell
  }
  //  记录两个联通的格子之间的墙
  addLinkedMap(cell1: any, cell2: any): any {

  }
}

export default Maze