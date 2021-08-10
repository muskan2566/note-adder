console.log('notes app');
showItem();

let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click' ,function(e){
    let addtitle=document.getElementById('addTitle');
    let addTxt=document.getElementById('addTxt');
    let notes= localStorage.getItem('notes');
    if(notes==null){
          notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    // let notetitle=addtitle.value;
    // let notetext=addTxt.value;
    let addObj={
        title:addtitle.value,
        text: addTxt.value,
    };
    // console.log(addtitle);
    notesObj.push(addObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtitle.value="";
    addTxt.value="";
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
        html+=`<div id="notes" class=" row container-fluid">
        <div class=" search my-2 mx-2 card" style="width: 48rem;">
          <div class="card-body">
            <h5 class="card-title"> ${element.title}<br></h5>
            <p>${element.text}</p>
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
    // let p=document.getElementsByTagName("p").innerText;
    let p = element.querySelector("p").innerText;
    // console.log(p);
    if(p.includes(inputval))
        element.style.display="block";
    else
        element.style.display="none";
});
});
