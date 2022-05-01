const elem = document.getElementById('therma');

const changeData= ()=>{
    setTimeout(()=>{
        elem.src='images/thermameter2.png';
    },1000)
    setTimeout(()=>{
        elem.src='images/thermameter3.png';
    },2000)
    setTimeout(()=>{
        elem.src='images/thermameter4.png';
    },3000)
    setTimeout(()=>{
        elem.src='images/thermameter5.png';
    },4000)
   }    
setInterval(changeData,4000);
changeData();