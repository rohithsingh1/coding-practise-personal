class CustPromise{
  constructor (handler) {
    this.status='pending';
    this.value=null;
    this.fullfilledCallbacks=[];
    this.rejectedCallbacks=[];

    const resolve=(value) => {
      if(this.status==='pending') {
        this.status='fulfilled';
        this.value=value;
        this.fullfilledCallbacks.forEach((fn) => {
           return fn(value)
        })
      }
    }
    const reject=(value) => {
      if(this.status==='pending') {
        this.status='rejected';
        this.value=value;
        this.rejectedCallbacks.forEach((fn) => {
          fn(value);
        })
      }
    }
    try {
      handler(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFullfilled) {
    return new CustPromise((resolve, reject) => {
      if(this.status==='pending') {
        this.fullfilledCallbacks.push(() => {
          resolve(onFullfilled(this.value))
        })
      }
      if(this.status==='fulfilled') {
         resolve(onFullfilled(this.value));
      }
    })
  }
  catch(onRejected) {
    return new CustPromise((resolve, reject) => {
      if(this.status==='pending') {
        this.rejectedCallbacks.push(() => {
          reject(onRejected(this.value));
        })
      }
      if(this.status==='rejected') {
        reject(onRejected(this.value));
      }
    })
  }
}

const p1=new CustPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved');
  }, 1000);
})
const p2=new CustPromise((resolve, reject) => {
  setTimeout(() => {
    reject('rejected');
  }, 200);
})

p1.then((res) => {
  console.log("p1 resolved = ", res)
  return res;
}).then((res) => {
  console.log('called then again in p1 = ',res)
})

p2.catch((res) => {
  console.log("p2 rejected = ", res)
  return res;
}).catch((res) => {
  console.log('called catch again in p2 = ', res);
})



function PromiseAll(promises) {
  let count=0;
  let arr=[];
  return new Promise((resolve, reject) => {
    for(let index=0; index<promises.length; index++){
      try {
        Promise.resolve(promises[index]).then((res) => {
          count++;
          arr[index]=res;
          if(count===promises.length) {
            resolve(arr)
          }
        }).catch((err) => {
          reject(err)
        })
      } catch (error) {
        reject(error)
      }
    }
  })
}

const p3=Promise.resolve(46);
const p4=52;
const p5=new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved')
  },800)
})
const p6=new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('rejected');
  },1000)
})
const promiseall = PromiseAll([p3,p4,p5,p6])
promiseall.then((res) => {
  console.log('all promises are resolved = ',res)
}).catch((error) => {
  console.log('all promises are not resolved = ', error);
})


function PromiseRace(promises) {
  return new Promise((resolve, reject) => {
    for(let p of promises) {
      try {
        Promise.resolve(p).then((res) => {
          resolve(res)
        }).catch((res) => {
          reject(res)
        })
      } catch (error) {
        reject(error)
      }
    }
  })
}

const p7=new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved')
  },500)
})

const p8=new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('rejected');
  }, 800);
})

const promiserace = PromiseRace([p7,p8])
promiserace.then((res) => {
  console.log('which resolved first = ',res)
}).catch((res) => {
  console.log('which rejected first = ',res)
})










