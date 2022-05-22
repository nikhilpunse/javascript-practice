const container = document.querySelector('.container');

let limit  = 4;
let pageCount =1;
let postCount = 1;

const getData = async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    const data= await res.json();
    console.log(data);

    data.map((val,ind)=>{
        const html= `<section class=" min-w-min w-[80%] border mx-auto  bg-white rounded my-10 ">
                        <div class="w-[3vw] h-[3vw] bg-blue-600 grid place-items-center m-3 text-lg">${postCount++}</div>
                        <div class="title text-black text-2xl m-3">Title Place :-${val.title}</div>
                        <div class="text-black m-3"> ${val.body} </div>
                    </section>`;
        const html1 = '<div className="div text-black">hello</div>';

        container.insertAdjacentHTML('beforeend',html);
    })
}

getData();

const showData =()=>{
    setTimeout(()=>{
        pageCount++;
        getData();
    },300);
}

window.addEventListener('scroll',()=>{
    const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
        if(scrollTop + clientHeight >= scrollHeight ){
            showData();
        }
})