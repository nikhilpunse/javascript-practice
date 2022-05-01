
const counters= document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML=0;

    const updateCounter=()=>{
        const targetCounter = +counter.getAttribute('data-target');
        const startCounter = Number(counter.innerHTML);
        const incr = Math.round(targetCounter/100);
        
        if(startCounter<targetCounter){
            counter.innerHTML=`${startCounter + incr}`;
            setTimeout(updateCounter,20);
        }else{
            counter.innerHTML = targetCounter;
        }
    }
    updateCounter();
})

