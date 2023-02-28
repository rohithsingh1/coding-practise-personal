// ==================================== Double linked list =====================================================

// class Node{
//     constructor(data){
//         this.data = data
//         this.prev = null
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(head = null){
//         this.head = head
//         this.size = 0
//     }
//     add(data){
//         let node = new Node(data)
//         let curr
//         if(this.head === null){
//             this.head = node
//         }else{
//             curr = this.head
//             while(curr.next){
//                 curr = curr.next
//             }
//             curr.next = node
//             node.prev = curr
//         }
//         this.size++
//     }
//     indexAt(data,index){
//         let curr,prev,i=0;
//         let node = new Node(data)
//         curr = this.head
//         if(curr === null){
//             curr = node
//             return curr
//         }
//         else if(curr.next === null){
//             node.prev = curr
//             curr.next = node
//             return curr
//         }
//         else{
//             if(index === 0){
//                 node.next = curr
//                 curr.prev = node
//             }else{
//                 prev = null
//                 while(i < index){
//                     prev = curr
//                     curr = curr.next
//                     i++
//                 }
//                 node.next = curr
//                 prev.next = node
//                 node.prev = prev
//                 curr.prev = node
//             }
//             this.size++
//         }
//     }
//     removeFrom(head,index){
//         if(head === null || head.next === null){
//             return head
//         }else{
//             let curr,prev,i=0;
//             curr = this.head
//             prev = null
//             if(index === 0){
//                 this.head = curr.next
//                 this.head.prev = null
//                 curr.next = null
//             }else{
//                 while(i < index){
//                     prev = curr
//                     curr = curr.next
//                     i++
//                 }
//                 prev.next = curr.next
//                 curr.next.prev = prev
//                 curr.next = null
//                 curr.prev = null
//             }
//             this.size--
//             return curr
//         }
//     }
//     removeElement(key){
//         let curr,prev,i=0;
//         curr = this.head
//         prev = null
//         while(curr){
//             if(curr.data === key){
//                 if(prev === null){
//                     this.head = curr.next
//                     this.head.prev = null
//                     curr.next = null
//                 }else{
//                     prev.next = curr.next
//                     curr.next.prev = prev
//                     curr.next = null
//                     curr.prev = null
//                 }
//                 this.size--
//                 return curr.data
//             }
//             prev = curr
//             curr = curr.next
//         }
//         return -1
//     }
//     indexOf(key){
//         let index = 0
//         let curr = this.head
//         while(curr){
//             if(curr.data === key){
//                 return index
//             }
//             index++
//             curr = curr.next
//         }
//         return -1
//     }
//     reverse_dll(head){
//         let curr = head
//         let prev = null
//         if(curr === null){
//             return -1
//         }else if(curr.next === null){
//             return head
//         }else{
//             while(curr){
//                 prev = curr
//                 curr = curr.next
//                 let a = prev.next
//                 prev.next = prev.prev
//                 prev.prev = a
//             }
//             head = prev
//             return head
//         }
//     }
//     print_DLL(head){
//         let curr = head
//         let str = ""
//         if(curr !== null){
//             while(curr){
//                 str = str + curr.data + " "
//                 curr = curr.next
//             }
//             console.log(str)
//         }else{
//             console.log("Double linked list is empty")
//         }
//     }
// }


// let dll = new LinkedList()
// dll.add(1)
// dll.add(2)
// dll.add(4)
// dll.add(6)
// dll.add(5)
// dll.print_DLL(dll.head)
// dll.indexAt(3,2)
// dll.print_DLL(dll.head)
// let res = dll.removeFrom(dll.head,3)
// if(res !== null){
//     console.log(res.data)
// }else{
//     console.log("Double linked list is empty ")
// }
// dll.print_DLL(dll.head)
// let res2 = dll.indexOf(5)
// if(res2 !== -1){
//     console.log("index of element 5  ", res2)
// }else{
//     console.log('please enter the valid key element')
// }
// let new_head = dll.reverse_dll(dll.head)
// dll.print_DLL(new_head)
