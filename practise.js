//function convert12HrsTo24Hrs(str) {
//    let arr=str.split(':');
//    let hrs24;
//    if(str.includes('pm')) {
//        if(arr[0]==='12') {
//            hrs24 = parseInt(arr[0], 10);
//        } else {
//         hrs24=parseInt(arr[0], 10)+12;
//        }
//    } else {
//        if(arr[0]==='12') {
//            hrs24='00';
//        } else {
//            hrs24=arr[0];
//        }
//    }
    
//    return [hrs24, arr[1], arr[2].slice(0, 2)].join(':');
//}


//let str='12:05:45AM';
//console.log(convert12HrsTo24Hrs(str.toLowerCase()))


// map vs forEach difference
//const arr=[2, 5, 8, 4];

//const mapResult=arr.map((ele) => {
//    return ele+2;
//}).filter((ele) => {
//    return ele>6;
//})

//const forEachResult=arr.forEach((ele) => {
//    return ele+2;
//})

//console.log(mapResult,forEachResult)

//================================================================================

// Event delegation

//let buttonsQuerySelector=document.querySelectorAll("button");
//console.log(buttonsQuerySelector)

//let buttonsByTagName=document.getElementsByTagName("button")
//console.log(buttonsByTagName)

//buttonsQuerySelector.forEach((button) => {
//    button.addEventListener("click", (e) => {
//        if(e.target.tagName==="BUTTON") {
//            console.log(e.target.innerText)
//        }
//    })
//})

//let divTag = document.getElementsByTagName("div")[0]

//divTag.addEventListener("click", (e) => {
//    if(e.target.tagName==="BUTTON") {
//        console.log(e.target.innerText)
//    }
//})

//================================================================================

// Array.flat implementation

//let arr=[
//    [1, 2],
//    [3, 4, 5],
//    [6, [7, 8, 9], 10],
//    [11,12,[13,[14,15]]]
//]
//let resultArr=[];
////console.log(arr.flat(2))

//function customFlat(arr) {
//    if(!Array.isArray(arr)) {
//        resultArr.push(arr);
//        return;
//    } else {
//        arr.forEach((ele) => {
//            customFlat(ele)
//        })
//    }
//}
//arr.forEach((ele) => {
//    customFlat(ele);
//})
//console.log('resultArr flat arr = ',resultArr)


////================================================================================

//settimeout based question


//function a() {
//    let arr=[]
//    for(var i=0; i<3; i++){
//        arr[i]=function() {
//            return i;
//        }
//            //setTimeout(() => {
//            //    arr[i]=function() {
//            //        return i;
//            //    }
//            //},1000)
//    }
//    return arr;
//}
//let arrfun=a()
////console.log('arrfun = ',arrfun)
//let arrValues=arrfun.map((ele) => {
//    console.log('ele = ',ele)
//    return ele();
//})
//console.log('arrValues = ',arrValues)


////================================================================================

// implement the code

//const calc={
//    total: 0,
//    add: function(a) {
//        this.total=this.total+a;
//        return this;
//    },
//    multiply: function(m) {
//        this.total=this.total*m;
//        return this;
//    },
//    subtract: function(s) {
//        this.total=this.total-s;
//        return this;
//    }
//}

//const result=calc.add(10).multiply(5).subtract(10).add(20);
//console.log(result.total)


////================================================================================

// implement the basic promise

class CustPromise{
    constructor (Handler) {
        this.status="pending";
        this.value=null;
        this.onFulfilledCallBacks=[];
        this.onRejectedCallBacks=[];
        
        const resolve=(value) => {
            if(this.status==="pending") {
                this.status='fulfilled';
                this.value=value;
                this.onFulfilledCallBacks.forEach((fn) => {
                    return fn(value)
                })
            }    
        }
        const reject=(value) => {
            if(this.status==='pending') {
                this.status='rejected';
                this.value=value;
                this.onRejectedCallBacks.forEach((fn) => {
                    return fn(value)
                })
            }
        }
        try {
            Handler(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFullfilled) {
        return new CustPromise((resolve, reject) => {
            if(this.status==='pending') {
                this.onFulfilledCallBacks.push(() => {
                    resolve(onFullfilled(this.value))
                })
            }
            if(this.status==='fulfilled') {
                resolve(onFullfilled(this.value))
            }  
        })
    }
    catch(onRejected) {
        return new CustPromise((resolve, reject) => {
          if(this.status==='pending') {
              this.onRejectedCallBacks.push(() => {
                try {
                    const callbackpromise=onRejected(this.value)
                    resolve(callbackpromise)
                } catch (error) {
                    reject(error)
                }
            })
        }
            if(this.status==='rejected') {
                try {
                    const callbackpromise=onRejected(this.value)
                    resolve(callbackpromise)
                } catch (error) {
                    reject(error)
                }
            }  
        })
    }
    //finally(onFinally) {
    //    if(this.status==='pending') {
    //        this.onFulfilledCallBacks.push(onFinally)
    //        this.onRejectedCallBacks.push(onFinally)
    //    }
    //    if(this.status==='fulfilled'||this.status==="rejected") {
    //        onFinally(this.value)
    //    }
    //    return this;
    //}
}

//let isNum = 14
//const p1=new CustPromise((resolve, reject) => {
//    setTimeout(() => {
//        if(Number.isInteger(isNum)) {
//            resolve('resolved');
//         }
//    },1000)
//})
//p1.then((res) => {
//    console.log("promise fulfilled in p1 = ", res)
//    return res + " new callback resolve"
//}).then((res) => {
//    console.log('promise fulfilled in p1 = ',res)
//})

//isNum = '14'
//const p2=new CustPromise((resolve, reject) => {
//    setTimeout(() => {
//        if(!Number.isInteger(isNum)) {
//           reject('rejected!!!!')
//         }
//    },2000)
//})

//p2.then((res) => {
//    console.log("promise fulfilled in p2 = ", res)
//    return res + "new callback resolve"
//}).catch((res) => {
//    console.log("promise rejected in p2 = ", res)
//    return res + "new callback rejected"
//}).catch((res) => {
//    console.log('promise rejected in p2 = ',res)
//})


//function promiseAll(promises) {
//     return new Promise((resolve, reject) => {
//            let count=0;
//            let result=[];
//         for(let i=0; i<promises.length; i++){
//                try {
//                 Promise.resolve(promises[i]).then((res) => {
//                    result[i]=res;
//                    count++;
//                    //console.log('count = ',count)
//                    if(count===promises.length) {
//                        resolve(result)
//                    }
//                 }).catch((res) => {
//                     //console.log(res)
//                     reject(res)
//                })
//                } catch (error) {
//                    reject(error)
//                }
//            }
//        })
//}


//let promise1=Promise.resolve(46)
//let promise2 = 52
//let promise3=new CustPromise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('resolved the settimeout')
//    },1000)
//})
//let promise4 = Promise.reject('rejected!!!')
//promiseAll([promise1, promise2, promise3,promise4]).then((res) => {
//    console.log('all promises are resolved = ',res)
//}).catch((err) => {
//    console.log('all promises are not resolved = ',err)
//})



//function PromiseRace(promises) {
//    return new Promise((resolve, reject) => {
//        for(let p of promises) {
//            try {
//                Promise.resolve(p).then((res) => {
//                    resolve(res)
//                }).catch((err) => {
//                    reject(err)
//                })
//            } catch (error) {
//                reject(error)
//            }
//        }
//    })
//}

//let promise5=new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('promise5 resolved')
//    },1000)
//})

//let promise6=new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('promise6 resolved')
//    },500)
//})

//let promise7=new Promise((resolve, reject) => {
//    setTimeout(() => {
//        reject('promise7 rejected')
//    },300)
//})

//PromiseRace([promise5, promise6,promise7]).then((res) => {
//    console.log('promise resolved = ',res)
//}).catch((err) => {
//    console.log('promise rejected = ',err)
//})






//function countDown(val, callback) {
//    if(val===0) {
//        console.log('happy independence day');
//        return;
//    } else {
//        console.log('val = ', val);
//        setTimeout(() => {
//            callback(--val,countDown);
//        }, 1000);
//    }
//}

//let val=10;
//countDown(val, countDown);



class Student{
    constructor (name,age,cls) {
        this.myname=name;
        this.myage=age;
        this.mycls=cls;
    }
    bioData() {
        return (`Hi, my name is ${this.myname} 
        and my age is ${this.myage} 
        and iam studying in ${this.mycls}`)
    }
}


class Player extends Student {
    constructor (name,age,cls,game) {
        super(name, age, cls);
        this.mygame=game;
    }
    my_bioData() {
        return `${super.bioData()} and I love playing ${this.mygame}`;
    }
}


let s1=new Player('sai sohith', 12, '9th','cricket');
console.log(s1.my_bioData())

let s2 = new Player('pavan', 10, '8th','football');
console.log(s2.my_bioData())
































