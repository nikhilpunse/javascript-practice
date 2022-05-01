// class Student{
//     constructor(name){
//         this.myname = name;
//     }
//     biodata(){
//         console.log(`My name is ${this.myname}`);
//     }
// }

// const obj1 = new Student('soman');
// obj1.biodata();



class Students{
    constructor(name,age,id){
        this.myname=name;
        this.myage = age;
        this.myid = id;
    }
    biodata(){
        console.log(`My name is ${this.myname}.My age is ${this.myage}.
                    my id is ${this.myid}.`)
    }
}
class Games extends Students{
    constructor(name,age,id,game){
        super(name,age,id);
        this.mygame = game;
    }
    play_biodata(){
        console.log(`My name is ${this.myname}.My age is ${this.myage}. my id is ${this.myid}. my fav game is ${this.mygame}`)
    }
}
const obj1= new Games('Nikhil', 30, 72451,'football');
obj1.play_biodata();

