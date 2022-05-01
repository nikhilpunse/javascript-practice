const btn = document.querySelector('#btn');
const container = document.querySelector('#container');

// adding textarea data to localstorage
const updateLSD = () =>{
    const notes = document.querySelectorAll('textarea');
    const noteDataArray = [];
    notes.forEach((curElem)=>{
        if(curElem.value != '')
        noteDataArray.push(curElem.value)
    })
   localStorage.setItem('notes',JSON.stringify(noteDataArray));
    console.log(noteDataArray);
}

const addNewNote = (text='')=>{
    const note = document.createElement('div');
    note.classList.add('note');
    const html = `<div class="operation">
                    <img class="edit" src="images/kindpng_1541056.png" alt="">
                    <img class="delete" src="images/toppng.com-delete-circle-icon-600x600.png" alt="">
                 </div>
                <div class="main ${text? '': 'hidden'}"></div>
                <textarea class=" ${text? 'hidden' : ''} " name="" id="" cols="30" rows="10"></textarea>`;
    note.insertAdjacentHTML("afterbegin",html);
    container.appendChild(note);

    // getting references of Element
    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // paasing data from textarea to maindiv using change
    textArea.addEventListener('change',(event)=>{
        mainDiv.innerHTML = event.target.value;
        updateLSD();
    })

    mainDiv.innerHTML = text;
    textArea.value = text;

    // edit button function to tiggle textarea and maindiv
    editButton.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    // deleting note
    deleteButton.addEventListener('click',()=>{
        note.remove();
        updateLSD();
    })

}

// getting data back from localStorage

const notes = JSON.parse(localStorage.getItem('notes'))
if(notes){
    notes.map((note)=>{
        addNewNote(note);
    })
}

// adding note while clicking add button
btn.addEventListener('click',()=>addNewNote());