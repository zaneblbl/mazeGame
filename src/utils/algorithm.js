/*
 * @Descripttion: 算法库
 * @version: 
 * @Date: 2021-02-05 16:03:20
 * @Author: cell
 */

// 连通集算法
export class UnionSet{
  constructor(size){
    // 生成0,1,2,3的默认集合
    this.set=new Array(size).fill(-1)
  }
  // 找到root
  findRoot(x){
    while(this.set[x]>=0){
      x=this.set[x]
    }
    return x
  }
  // 联通 
  union(x,y){
    this.unionElement(this.findRoot(x),this.findRoot(y))
  }
  unionElement(x,y){
    this.set[x]=y
  }
  // 是否是同一个连通集
  sameSet(x,y){
    return this.findRoot(x)===this.findRoot(y)
  }
}