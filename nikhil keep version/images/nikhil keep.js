const btn =document.querySelector('#btn');
const container =document.querySelector('#container');

const updateLSD = ()=>{
    const textArea = document.querySelectorAll('textarea');
    const notes = [];
    textArea.forEach((note)=>{
        if(note!=''){
            return notes.push(note.value);
        }
        
    })
    localStorage.setItem('nodes',JSON.stringify(notes))
}

const addNewNote = (text= '')=>{
const note = document.createElement('div');
note.classList.add('note');
const htmlData = `
        <div class="operation">
            <img class="edit" src="images/kindpng_1541056.png" alt="">
            <img class="delete" src="images/toppng.com-delete-circle-icon-600x600.png" alt="">
        </div>
        <div class="main ${text? "" : "hidden"}"></div>
        <textarea class="${text? "hidden" : ""}" name="" id="" cols="30" rows="10"></textarea>`;

note.insertAdjacentHTML("afterbegin",htmlData);

// insert new note in document
container.appendChild(note);


// creating references of elements
const editButton = note.querySelector('.edit');
const delButton = note.querySelector('.delete');
const mainDiv = note.querySelector('.main');
const textArea = note.querySelector('textarea');

// deleting note from documents

delButton.addEventListener('click',()=>{
    note.remove();
    updateLSD();
})

// passing data to div
textArea.value = text;
mainDiv.innerHTML = text;

// toggle div and textarea
editButton.addEventListener('click', ()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})

// tansfer data from textArea to main div using 'change'
textArea.addEventListener('change',(event)=>{
    const value = event.target.value;
    mainDiv.innerHTML = value;
    updateLSD();
})

}

// getting data from local storage 
const nodes = JSON.parse(localStorage.getItem('nodes'));
if(nodes){
    nodes.forEach((note)=> addNewNote(note));
}

btn.addEventListener('click', ()=>addNewNote());