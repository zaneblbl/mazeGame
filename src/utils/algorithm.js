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
    this.set=new Array(size).fill(0).map((res,idx)=>{
      return res+idx
    })
  }
  // 找到root
  findRoot(x){
    let root=x
    while(this.set[root]!=root){
      root=this.set[root]
    }
    return root
  }
  // 联通 
  union(x,y){
    let rootX=this.findRoot(x),rootY=this.findRoot(y)
    if(rootX!=rootY){
      this.set[rootX]=rootY
    }
  }
  // 是否是同一个连通集
  sameSet(x,y){
    return this.findRoot(x)===this.findRoot(y)
  }
}