
const cunversion=()=>{
    const temp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('tempSelected').value;
    const show =document.getElementById('show');
    
    if(tempSelected == 'cel'){
        const res=Math.round((temp*9/5)+32);
        show.innerHTML=`= ${res} fahrenhaite`;
    }
    else{
        const res=Math.round((temp-32)*5/9);
        show.innerHTML=`= ${res} celcius`;
    }
}
