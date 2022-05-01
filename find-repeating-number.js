const num = [23,43,12,4,5,65,43,12,65,2,3,4,65,2,65];

// finding unique set from given Array
let uniSet =[];
num.forEach((elem)=>{
    if(!(uniSet.includes(elem))){
        uniSet.push(elem);
    }
})
let sortArr = uniSet.sort((a,b)=>a-b);
let counterArr = [];

// finding repeating number
sortArr.forEach((setElem)=>{
    let count = 0;
    num.forEach((numElem)=>{
        if(setElem == numElem){
            count++;
        }
    })
    counterArr.push(count);
})

// finding repeating counter 
let maxCount=0;
counterArr.forEach((elem)=>{
    if(maxCount<elem){
        maxCount=elem;
    }
})

let maxNumIndex = counterArr.indexOf(maxCount);
let maxNum =sortArr[maxNumIndex];

console.log(`most repeating number in given array is ${maxNum} and it is ${maxCount} times repeated.`);

