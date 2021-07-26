console.log("welcome try");
let btn=document.getElementById('addBtn');
btn.addEventListener('click',function(e){
    let txt=document.getElementById('addTxt');
    let note=localStorage.getItem('note');
    if(note==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(note);
    }
    let add=txt.value;
    noteObj.push(add);
    localStorage.setItem('note',JSON.stringify(noteObj));
    txt.value="";
    console.log(add);
    showItem();
});
function showItem(){
    let note=localStorage.getItem('note');
    if(note==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(note);
    }
    let html="";
    noteObj.forEach(function(element,index){
        html+=`<div id="notes" class="row container-fluid">
        <div class=" my-2 mx-2 card" style="width: 48rem;">
          <div class="card-body">
            <h5 class="card-title">Note ${index}:<br></h5>
            <p>${element}</p>
            <button onclick="deletenote(${index})" class="btn btn-primary"> Delete Note</button>
          </div>
        </div>`;     
    });
}
function deletenote(index){
    let note=localStorage.getItem('note');
    if(note==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(note);
    }
    noteObj.splice(index,1)
    localStorage.setItem('note',JSON.stringify(noteObj));
    showItem();
}