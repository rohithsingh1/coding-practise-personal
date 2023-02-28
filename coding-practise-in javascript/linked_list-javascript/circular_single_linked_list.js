// =================================== Circular single linked list =================================================

// creating Node class/template
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

// creating Circular single linked list class/template
class CircularSLL{
    constructor(head = null){
        this.head = head
        this.size = 0
    }
    // Inserting at the begining of a circular single linked list
    Insert_at_the_begining(head,data){
        let T = new Node(data)
        if(head === null){
            head = T
            T.next = T
        }else{
            T.next = head.next
            head.next = T
        }
        this.size++
        //console.log("last = ",last)
        return head
    }
    Insert_at_the_end(head,data){
        let T = new Node(data)
        if(head === null){
            head = T
            T.next = T
        }else{
            T.next = head.next
            head.next = T
            head = T
        }
        this.size++
        return head
    }
    Insert_in_between(head,data,key){
        let T = new Node(data)
        if(head === null){
            head = T
            T.next = T
            this.size++
            return head
        }else{
            let curr = head.next
            let prev = head
            while(curr !== head){
                if(curr.data === key){
                    prev.next = T
                    T.next = curr
                    this.size++
                    return head
                }else{
                    prev = curr
                    curr = curr.next
                }
            }
            if(curr.data === key){
                prev.next = T
                T.next = curr
                this.size++
                return head
            }else{
                T.next = head.next
                head.next = T
                head = T
                this.size++
                return head
            }
        }
    }
    Delete_node(head,key){
        if(head === null){
            return head
        }else{
            let curr = head.next
            let prev = head
            while(curr !== head){
                if(curr.data === key){
                    prev.next = curr.next
                    curr.next = null
                    this.size--
                    return head
                }else{
                    prev = curr
                    curr = curr.next
                }
            }
            if(curr.next === head){
                if(curr.data === key){
                    head = null
                    this.size--
                }
                return head
            }
            if(curr.data === key){
                prev.next = curr.next
                curr.next = null
                head = prev
                this.size--
                return head
            }else{
                return head
            }
        }
    }
    Delete_Kth_node(head,k){
        let curr = head.next
        let prev = head
        if(k === 1){
            if(curr.next === head){
                head = null
                this.size--
                return head
            }else{
                while(curr !== head){
                    prev = curr
                    curr = curr.next
                }
                prev.next = curr.next
                head = prev
                curr.next = null
                this.size--
                return head
            }
        }else{
            let i = 2
            while(curr !== head){
                if(i === k){
                    prev.next = curr.next
                    curr.next = null
                    this.size--
                    return head
                }
                prev = curr
                curr = curr.next
                i++
            }
        }
    }
    print_CLL(head){
        let str = ""
        if(head === null){
            console.log("circular linked list is empty")
        }else{
            let curr = head.next
            while(curr !== head){
                str = str + curr.data + " "
                curr = curr.next
            }
            if(curr === head){
                str = str + curr.data + " "
            }
            console.log(str)
        }
    }
}


let CSLL = new CircularSLL()
// inserting at the begining of a circular single linked list
let arr = [3,2,1,0]
for(let i=0;i<arr.length;i++){
    CSLL.head = CSLL.Insert_at_the_begining(CSLL.head,arr[i])
}
// inserting at the end of a circular single linked list
arr = [4,5,6,7]
for(let i=0;i<arr.length;i++){
    CSLL.head = CSLL.Insert_at_the_end(CSLL.head,arr[i])
}
// insert in between of a circular single linked list
CSLL.head = CSLL.Insert_in_between(CSLL.head,44,4)
CSLL.head = CSLL.Insert_in_between(CSLL.head,66,7)
CSLL.head = CSLL.Insert_in_between(CSLL.head,77,8)
CSLL.print_CLL(CSLL.head)
console.log(CSLL.head)
// Deleting the node from circular single linked list -- from beginning,from end and in between of a list
CSLL.head = CSLL.Delete_node(CSLL.head,44)
CSLL.print_CLL(CSLL.head)
console.log(CSLL.head)
CSLL.head = CSLL.Delete_Kth_node(CSLL.head,1)
CSLL.print_CLL(CSLL.head)
console.log(CSLL.head)
