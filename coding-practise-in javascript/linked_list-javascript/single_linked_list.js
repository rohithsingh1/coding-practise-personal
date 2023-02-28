// =================================== single Linked List ===============================================

class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}
class LinkedList{
    constructor(head = null){
        this.head = head,
        this.size = 0
    }
    add(data){
        var node = new Node(data)
        var current;
        if(this.head == null){
            this.head = node
        }else{
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    insertAt(data,index){
        if(index < 0 || index > this.size){
            return console.log("please enter a valid index")
        }else{
            let node = new Node(data)
            let curr,prev;
            if(index === 0){
                node.next = this.head
                this.head = node
            }else{
                curr = this.head
                let i=0
                while(i<index){
                    prev = curr
                    curr = curr.next
                    i++
                }
                node.next = curr
                prev.next = node
            }
            this.size++
        }
    }
    removeFrom(index){
        if(index < 0 || index > this.size){
            return " please enter a valid index ";
        }else{
            let curr,prev,i=0;
            curr = this.head
            if(index === 0){
                this.head = curr.next
            }else{
                while(i < index){
                    prev = curr
                    curr = curr.next
                    i++
                }
                prev.next = curr.next
            }
            this.size--
            return curr.data
        }
    }
    removeElement(key){
        let curr = this.head
        let prev = null
        while(curr !== null){
            if(curr.data === key){
                if(prev === null){
                    this.head = curr.next
                }else{
                    prev.next = curr.next
                }
                this.size--
                return curr.data
            }
            prev = curr
            curr = curr.next
        }
        return -1
    }
    indexOf(element){
        let index = 0
        let curr = this.head
        while(curr !== null){
            if(curr.data === element){
                return index
            }
            index++
            curr = curr.next
        }
        return -1
    }
    printlinkedlist(){
        let current = this.head
        let str = ""
        while(current){
            str = str + current.data + " "
            current = current.next
        }
        console.log(str)
    }
    ll_res_print(curr){
        if(curr === null){
            return 
        }
        console.log(curr.data)
        this.ll_res_print(curr.next)
    }
}
let ll = new LinkedList()
ll.add(10)
ll.add(20)
ll.add(30)
ll.add(40)
ll.add(50)
console.log("aaa = ",ll.aa)
console.log("ll.head = ",ll.head)
ll.printlinkedlist()
ll.insertAt(3,2)
ll.printlinkedlist()
// let res = ll.removeFrom(-2)
// console.log(res)
// //let res = ll.removeElement(6)
// if(res !== -1){
//     console.log("removed element form single linked list = ",res)
// }else{
//     console.log("element not found!!")
// }
// let index_of_element = ll.indexOf(21)
// if(index_of_element !== -1){
//     console.log("index of an element in single linked list = ",index_of_element)
// }else{
//     console.log("element not found!!")
// }

// ll.ll_res_print(ll.head,str)