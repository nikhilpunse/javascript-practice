
const elembtn =document.getElementById('jokebtn');
const elemshow =document.getElementById('show');
try{
  const setHeader ={
    headers :{
      accept : 'application/json'
      }
    }
  
  
  const getData = async ()=>{
   const res = await fetch('https://icanhazdadjoke.com/',setHeader);
   const data = await res.json();
   elemshow.innerHTML= data.joke;
  }
}catch(err){
  console.log(`The Error is ${err} occured.`)
}


elembtn.addEventListener('click',getData);
getData();