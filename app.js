console.log('notes app');
showItem();

let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click' ,function(e){
    let addTxt=document.getElementById('addTxt');
    let notes= localStorage.getItem('notes');
    if(notes==null){
          notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let add=addTxt.value;
    notesObj.push(add);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(add);
    showItem();
});
function showItem(){
    let notes= localStorage.getItem('notes');
    if(notes==null){
          notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`<div id="notes" class="search row container-fluid">
        <div class=" my-2 mx-2 card" style="width: 48rem;">
          <div class="card-body">
            <h5 class="card-title">Note ${index+1}:<br></h5>
            <p>${element}</p>
            <button onclick="deletenote(${index})" class="btn btn-primary"> Delete Note</button>
          </div>
        </div>`;
    });
    let set=document.getElementById('note');
    set.innerHTML=html;
}
function deletenote(index){
    let notes= localStorage.getItem('notes');
    if(notes==null){
          notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showItem();
}


let search=document.getElementById('search');
search.addEventListener('input',function(e){
let inputval=search.value;
let card=document.getElementsByClassName('search');  
Array.from(card).forEach(function(element){
    let p=element.getElementsByTagName("p").innerText;
    if(p.includes(inputval))
        element.style.display="block";
    else
        element.style.display="none";
});
});
