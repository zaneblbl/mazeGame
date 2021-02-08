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
  linkedMap: Map<number, Array<any>>
  unionSet: UnionSet
  constructor(columns: number, rows: number) {
    this.columns = columns
    this.rows = rows
    this.cells = columns * rows
    //  存放联通的格子，{1:[2,11]}表示第1个和2,11联通
    this.linkedMap = new Map()
    for (let i = 0; i < this.cells; i++) {
      this.linkedMap.set(i, [])
    }
    //  初始化连通集
    this.unionSet = new UnionSet(this.cells)
  }
  //  创建
  generate(): any {
    //  判断第一个是否与最后一个格子连通，如果不是的话，则每次随机选取两个相邻的格子，如果它们不在同一个连通集，则把它们连通一下，同时记录一下拆掉的墙到linkedMap里面
    while (!this.linkedToFirstCell()) {
      let cellPairs = this.pickRandomCellPairs()

      if (!this.unionSet.sameSet(cellPairs[0], cellPairs[1])) {
        this.unionSet.union(cellPairs[0], cellPairs[1])
        this.addLinkedMap(cellPairs[0], cellPairs[1])
      }
    }
  }
  // 和第一个格子是否联通
  linkedToFirstCell(): Boolean {
    for (let i = 1; i < this.cells; i++) {
      if (!this.unionSet.sameSet(0, i)) return false
    }
    return true
  }
  //  随机选取相邻的两个格子
  pickRandomCellPairs(): Array<any> {
    let randomDoubleCell: Array<any> = []
    let randomCell: any = Math.floor(Math.random() * this.cells)
    // 获取四周的格子
    let neiborCells: Array<any> = []
    let row = Math.floor(randomCell / this.columns)
    let column = randomCell % this.rows
    if (row !== 0) {
      neiborCells.push(randomCell - this.columns)
    }
    if (row !== this.rows - 1) {
      neiborCells.push(randomCell + this.columns)
    }

    if (column !== 0) {
      neiborCells.push(randomCell - 1)
    }

    if (column !== this.columns - 1) {
      neiborCells.push(randomCell + 1)
    }
    // 相邻的两个格子
    randomDoubleCell[0] = randomCell
    randomDoubleCell[1] = neiborCells[~~(Math.random() * neiborCells.length)]
    return randomDoubleCell
  }
  //  记录两个联通的格子之间的墙
  addLinkedMap(cell1: any, cell2: any): void {
    let mapCell1: any = this.linkedMap.get(cell1)
    let mapCell2: any = this.linkedMap.get(cell2)
    if (mapCell1?.indexOf(cell2) == -1) {
      mapCell1.push(cell2)
    }
    if (mapCell2?.indexOf(cell1) == -1) {
      mapCell2.push(cell1)
    }
  }
  // 最短路径算法通过
  calPath() {
  }
}

export default Maze