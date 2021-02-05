/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-05 16:13:20
 * @Author: cell
 */
import utils from '../../../../utils/utils'
 class Maze{
   constructor(columns,rows,canvas){
     this.columns=columns
     this.rows=rows
     this.cells=columns*rows
    //  存放联通的格子，{1:[2,11]}表示第1个和2,11联通
     this.linkedMap={}
   }
 }