//==================== Basic object creation and its methods and properties ========================================
let user = {
    name : 'rohithsingh',
    age : 23,
    email : "rohithsinghthakur3@gmail.com",
    location : "hyderabad",
    projects : [
        {
            title : "Tourist-place-application",
            author : "rohithsingh"
        },
        {
            title : "Whatsapp clone",
            author : "rohithsingh"
        },
        {
            title : "vehicle accident detection system",
            author : "rohithsingh"
        }
    ],
    login : function(){
        console.log("user loged in")
        return 0;
    },
    logout(){
        console.log("user logged out")
        return 0;
    },
    logprojects(){
        // for(let i in this.projects){
        //     console.log(this.projects[i].title)
        // }
        //console.log(this)
        this.projects.forEach(project =>{
            console.log(project.title, project.author)
        })
    }
}
console.log(user.login())
console.log(user.logout())
//console.log(user.logprojects())


// ======================================= Create Object constructors ======================================

// function Person(name,age,sex,country){
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     this.country = country;
//     this.UpdateAge = function(){
//         return ++this.age
//     };
// }
// let person1 = new Person("rohith",23,"Male","india")
// let person2 = new Person("geetha",48,"Female","india")
// console.log(person1.name,person1.age,person1.sex,person1.country)
// console.log(person1.UpdateAge())
// console.log(person2.UpdateAge())
// console.log(person1.UpdateAge())
// console.log(person2.UpdateAge())