class Node{
  constructor (data) {
    this.data=data
    this.left=null
    this.right=null
  }
}
class BinaryTree{
  constructor (root=null) {
    this.root = root
  }
  BuildTree1(arr) {
    let node=new Node(arr[0])
    if(this.root===null) {
      this.root = node
    }
    node=new Node(arr[1])
    this.root.left=node
    node=new Node(arr[2])
    this.root.right=node
    node=new Node(arr[3])
    this.root.left.left=node
    node=new Node(arr[4])
    this.root.left.left.right=node
    node=new Node(arr[5])
    this.root.right.left=node
    return this.root
  }
  BuildTree2(arr) {
    let node=new Node(arr[0])
    if(this.root===null) {
      this.root = node
    }
    node=new Node(arr[1])
    this.root.left=node
    node=new Node(arr[2])
    this.root.right=node
    node=new Node(arr[3])
    this.root.right.left=node
    node=new Node(arr[4])
    this.root.right.right=node
    node=new Node(arr[5])
    this.root.right.left.left=node
    node=new Node(arr[6])
    this.root.right.right.right=node
    node=new Node(arr[7])
    this.root.right.left.left.left=node
    node=new Node(arr[8])
    this.root.right.right.right.right=node
    return this.root
  }
  BuildSymmetricTree(arr) {
    let node=new Node(arr[0])
    if(this.root===null) {
      this.root = node
    }
    node=new Node(arr[1])
    this.root.left=node
    node=new Node(arr[1])
    this.root.right=node
    node=new Node(arr[2])
    this.root.right.right=node
    node=new Node(arr[3])
    this.root.left.right=node
    node=new Node(arr[3])
    this.root.right.left=node
    return this.root
  }
  preOrder(node) {
    if(node===null) {
      return;
    } else {
      preOrderTemp.push(node.data)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  inOrder(node) {
    if(node===null) {
      return;
    } else {
      this.inOrder(node.left)
      inOrderTemp.push(node.data)
      this.inOrder(node.right)
    }
  }
  postOrder(node) {
    if(node===null) {
      return;
    } else {
      this.postOrder(node.left)
      this.postOrder(node.right)
      postOrderTemp.push(node.data)
    }
  }
  levelOrder(node) {
    if(node===null) {
      return;
    } else {
      levelOrderTemp.push(node.data)
      if(node.left!==null) {
       queue.push(node.left) 
      }
      if(node.right!==null) {
       queue.push(node.right) 
      }
      // console.log('queue = ', queue);
      if(queue.length>0) {
        let node1=queue.shift()
        // console.log('node1 = ',node1)
        this.levelOrder(node1)
      }
    }
  }
  HBTree(node) {
    if(node===null) {
      return 0;
    } else {
      let leftHeight=this.HBTree(node.left)
      let rightHeight = this.HBTree(node.right)
      return (1 + Math.max(leftHeight,rightHeight))
    }
  }
  checkBalTree(node) {
    if(node===null) {
      return 0;
    } else {
      let Lh=this.checkBalTree(node.left)
      let Rh=this.checkBalTree(node.right)
      if((Lh===-1)&&(Rh===-1)) {
        return -1;
      }
      if(Math.abs(Lh-Rh)>1) {
        return -1;
      }
      return 1 + Math.max(Lh,Rh)
    }
  }
  DiameterOfTree(node) {
    if(node===null) {
      return 0;
    } else {
      let Lh=this.DiameterOfTree(node.left)
      let Rh=this.DiameterOfTree(node.right)
      maxDiameter=Math.max(maxDiameter, Lh+Rh)
      return 1 + Math.max(Lh,Rh)
    }
  }
  MaxWidthOfTree(node) {
    let maxWidth=0
    if(node===null) {
      return maxWidth
    } else {
      let queue=new Array()
      queue.push([node, maxWidth+1])
      while(queue.length!==0) {
        let n=queue.length
        let tempArr=new Array()
        for(let i=0; i<n; i++){
          let nodeArr=queue.shift()
          let node=nodeArr[0]
          let Index=nodeArr[1]
          let LIndex=2*(Index-1)+1
          let RIndex=2*(Index-1)+2
          if(node.left!==null) {
            queue.push([node.left,LIndex])
          }
          if(node.right!==null) {
            queue.push([node.right,RIndex])
          }
          tempArr.push(Index)
          console.log('TempArr = ',tempArr)
        }
        maxWidth=Math.max(maxWidth, Math.abs(tempArr[tempArr.length-1]-tempArr[0]+1))
        console.log('maxwidth = ',maxWidth);
      }
      return maxWidth
    }
  }
  MaxPathSum(node) {
    if(node===null) {
      return 0;
    } else {
      let Lh=this.MaxPathSum(node.left)
      let Rh=this.MaxPathSum(node.right)
      maxSum=Math.max(maxSum, Lh+Rh+node.data)
      return node.data + Math.max(Lh,Rh)
    }
  }
  ZigZagTraversal(node) {
    let ans=new Array()
    if(node===null) {
      return ans
    } else {
      let flag=false
      let queue=new Array()
      queue.push(node)
      while(queue.length!==0) {
        let n=queue.length
        let temp=new Array()
        for(let i=0; i<n; i++){
          let node1=queue.shift()
          if(node1.left!==null) {
            queue.push(node1.left)
          }
          if(node1.right!==null) {
            queue.push(node1.right)
          }
          temp.push(node1.data)
        }
        if(flag) {
          temp.reverse()
          ans.push(temp)
        } else {
          ans.push(temp)
        }
        flag = !flag
      }
      let i=0
      while(i<ans.length) {
        let j=0
        while(j<ans[i].length) {
          queue.push(ans[i][j])
          j++
        }
        i++
      }
      return queue
    }
  }
  BoundaryTraversal(node) {
    let ans=new Array()
    ans.push(node.data)
    leftBoundTraversal(node.left, ans)
    leafTraversal(node, ans)
    rightBoundTraversal(node.right, ans)
    return ans
  }
  SymmetricTree(node) {
    if(node===null) {
      return false;
    } else {
      if((node.left!==null)&&(node.right!==null)) {
        return SymmetricFunc(node.left,node.right)
      }
    }
  }
  PrintRootToNodePath(node,key) {
    if(node===null) {
      return false
    } else {
      if(node.data===key) {
        ans.push(node.data)
        return true
      } else {
        let Ltree=this.PrintRootToNodePath(node.left, key)
        let Rtree=this.PrintRootToNodePath(node.right, key)
        if(Ltree||Rtree) {
          ans.push(node.data)
          return true
        }
        return (Ltree || Rtree)
      }
    }
  }
  TotalNodesInCompTree(node) {
    if(node===null) {
      return 0;
    } else {
      let Lh=LeftSubTreeHeight(node)
      let Rh=RightSubTreeHeight(node)
      console.log('data = ',node.data)
      console.log('Lh = ', Lh)
      console.log('Rh = ',Rh);
      if(Lh===Rh) {
        return (Math.pow(2,Lh)-1)
      }
      return 1 + this.TotalNodesInCompTree(node.left) + this.TotalNodesInCompTree(node.right)
    }
  }
}

function isTwoTreesSame(node1, node2) {
  if(node1===null||node2===null) {
      return node1===node2
    }
    let isDataSame=(node1.data===node2.data)
    let isLeftSubTreeSame= isTwoTreesSame(node1.left, node2.left)
    let isRightSubTreeSame=isTwoTreesSame(node1.right, node2.right)
    console.log('node1.data = ', node1.data)
    console.log('node2.data = ',node2.data)
    console.log('isDataSame = ', isDataSame)
    console.log('isLeftSubTreeSame = ', isLeftSubTreeSame);
    console.log('isRightSubTreeSame = ',isRightSubTreeSame)
    return isDataSame&&isLeftSubTreeSame&&isRightSubTreeSame;
}

function leftBoundTraversal(node, ans) {
  if(node===null) {
    return;
  } else {
    if(node.left!==null) {
      ans.push(node.data)
      leftBoundTraversal(node.left,ans)
    }
    else if(node.right!==null) {
      ans.push(node.data)
      leftBoundTraversal(node.right,ans)
    } else {
      return;
    }
  }
}

function leafTraversal(node, ans) {
  if(node===null) {
    return;
  } else {
    if(node.left!==null) {
      leafTraversal(node.left, ans)
    }
     if((node.left===null)&&(node.right===null)) {
        ans.push(node.data)
    }
    if(node.right!==null) {
      leafTraversal(node.right,ans)
    }
  }
}

function rightBoundTraversal(node, ans) {
  if(node===null) {
    return;
  } else {
    if(node.right!==null) {
      rightBoundTraversal(node.right, ans)
      ans.push(node.data)
    }
    else if(node.left!==null) {
      rightBoundTraversal(node.left, ans)
      ans.push(node.data)
    } else {
      return;
    }
  }
}

function SymmetricFunc(Lnode, Rnode) {
  if(Lnode===null&&Rnode===null) {
    return true
  }
  else if((Lnode!==null)&&(Rnode!==null)) {
    let isDataSame=(Lnode.data===Rnode.data)
    let isLeftSame=SymmetricFunc(Lnode.left, Rnode.right)
    let isRightSame=SymmetricFunc(Lnode.right, Rnode.left)
    return isDataSame&&isLeftSame&&isRightSame;
  } else {
    return false
  }
}

function LeftSubTreeHeight(node) {
  let height=0
  while(node!==null) {
    height++
    node = node.left
  }
  return height
  // if(node===null) {
  //   return 0;
  // } else {
  //   return 1 + LeftSubTreeHeight(node.left)
  // }
}

function RightSubTreeHeight(node) {
  let height=0
  while(node!==null) {
    height++
    node = node.right
  }
  return height
  // if(node===null) {
  //   return 0;
  // } else {
  //   return 1 + RightSubTreeHeight(node.right)
  // }
}

let Btree=new BinaryTree()
let arr1 = [1,2,3,4,5,6]
let arr2=[1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr3 = [1,2,3,4]
//let root=Btree.BuildTree1(arr1)
//let root2=Btree.BuildTree2(arr2)
//let symmetricRoot = Btree.BuildSymmetricTree(arr3)

// let Btree1=new BinaryTree()
// let arr3=[100, 2, 3, 40, 5, 6]
// let root1 = Btree1.BuildTree1(arr3)


// let preOrderTemp=new Array()
// Btree.preOrder(root)
// console.log('preOrderTemp = ',preOrderTemp);

// let inOrderTemp = new Array()
// Btree.inOrder(root)
// console.log('inOrderTemp = ', inOrderTemp)

// let postOrderTemp=new Array()
// Btree.postOrder(root)
// console.log('postOrderTemp = ',postOrderTemp);

// let levelOrderTemp=new Array()
// let queue = new Array()
// Btree.levelOrder(root)
// console.log('levelOrderTemp = ',levelOrderTemp)

// let heightOfBinaryTree=Btree.HBTree(root)
// console.log('heightOfBinaryTree = ',heightOfBinaryTree);

// let isBalBiTree=Btree.checkBalTree(root)
// console.log('isBalancedTree = ',isBalBiTree)
// if(isBalBiTree!==-1) {
//   console.log('Balanced Binary Tree')
// } else {
//   console.log('Not Balanced Binary Tree');
// }


// let maxDiameter=0
// Btree.DiameterOfTree(root)
// console.log('maxDiameter = ',maxDiameter);


// let maxwidth=Btree.MaxWidthOfTree(root)
// console.log('maxwidth = ',maxwidth)


// let maxSum = 0
// Btree.MaxPathSum(root)
// console.log('maxSum = ',maxSum)


// let isTreesSame=isTwoTreesSame(root, root1)
// console.log('isTreessame = ',isTreesSame);


// let zigzagtraversal=Btree.ZigZagTraversal(root)
// console.log('zigzagtraversal = ',zigzagtraversal);


// let boundarytraversal=Btree.BoundaryTraversal(root2)
// console.log('boundarytraversal = ',boundarytraversal)

// let isSymmetricTree=Btree.SymmetricTree(symmetricRoot)
// console.log('isSymmetricTree = ',isSymmetricTree);


// let ans=new Array()
// let key = 5
// Btree.PrintRootToNodePath(root2, key)
// console.log('ans = ',ans)


// let totalnodesincompletebinarytree=Btree.TotalNodesInCompTree(symmetricRoot)
// console.log('totalnodesincompletebinarytree = ',totalnodesincompletebinarytree);

class Tree{
  constructor (root=null) {
    this.root=root
  }
  constructTree(parentArr, n,tempArr) {
    tempArr.fill(-1)
    for(let i=0; i<n; i++){
      let value=-(i+1)
      let node=new Node(value)
      tempArr.push(node)
    }
    for(let j=1; j<n; j++){
      let parIndex=parentArr[j]-1
      let node=tempArr[parIndex]
      if(node.left===null) {
        node.left = tempArr[j]
      }
      else if(node.right===null) {
        node.right = tempArr[j]
      }
    }
    return tempArr
  }
  NonNegativeTree(node) {
    if((node.left===null)&&(node.right===null)) {
      // minSum=minSum+Math.abs(Math.min(min, node.data))
      return Math.abs(node.data);
    } else {
      let left=0,right=0
      // min=Math.min(min, node.data)
      if(node.left!==null) {
        left = this.NonNegativeTree(node.left)
      }
      // min=node.data
      if(node.right!==null) {
        right = this.NonNegativeTree(node.right)
      }
      return Math.max(left+right,Math.abs(node.data))
    }
  }
}

let tree=new Tree()
let n=5
let parentArr=[-1, 5,4,1,1]
let tempArr = new Array()
let result = tree.constructTree(parentArr,n,tempArr)
console.log('result = ', result[0])
let minSum=0
// let min=result[0].data
let result1 = tree.NonNegativeTree(result[0])
console.log('minSum = ',result1);











