/*let p=document.getElementsByTagName("p");
let body=document.getElementsByTagName("body")

for(let i=0;i<3;i++){
    p[i].innerHTML="new"+i;
    p[i].style.height="50px";
    p[i].style.width="500px";
p[i].style.color="blue";
p[i].style.backgroundColor="violet";

}

let div=document.getElementById("d1");

div.innerHTML="new div data";
div.style.height="70px";
div.style.backgroundColor="yellow";
*/
let button=document.getElementById("button");
let deletebutton=document.getElementById("deletebutton");
let ul=document.getElementById("ul");//task incomplete
let ul2=document.getElementById("ul2");//task complete
let inputbox=document.getElementById("inputbox");
let inputbox2=document.getElementById("inputbox2");

function addtocompletelist(listitem){

ul.appendChild(listitem)

//listitem.
}

deletebutton.onclick=function (){

   // console.log(event.target)
    if(ul.hasChildNodes()==0){
    return ;
    }

    ul.removeChild(ul.childNodes[0]);

}

function addtodone(){

//wrong practice    //event.target.parentNode.parentNode.nextSibling.appendChild(event.target.parentNode)

ul2.appendChild(event.target.parentElement)
event.target.onchange=addtotodo;
}

function addtotodo(){

    //event.target.parentElement.parentElement.previousSibling.appendChild(event.target.parentElement)
    ul.appendChild(event.target.parentElement)
    event.target.onchange=addtodone
}

function edit(){
   // console.log(event.target.previousSibling)
    //console.log(event.target.nextSibling)
    
    let newdata=event.target.nextSibling.value;
    if(newdata==""){
        return;
    }
    event.target.previousSibling.innerHTML=newdata
    event.target.nextSibling.value=""
}

button.onclick=function(){
    //console.log("clicked")
    let val=inputbox.value;  //make sure u get value after button is clicked
    let tt=document.createElement("textNode");
    let p=document.createElement("li");
    let cb=document.createElement("input");
    let label=document.createElement("label");
    let ib=document.createElement("input");
    let editbtn=document.createElement("button");
    let deletebtn=document.createElement("button");
    
    editbtn.innerHTML="edit task"
    editbtn.style.margin="10px";
    editbtn.onclick=edit
    cb.type="checkbox"
    cb.style.margin="10px";
    label.innerHTML=val;
    deletebtn.onclick=function(){

        event.target.parentElement.remove()
    }
    deletebtn.style.margin="20px";
    deletebtn.innerHTML="Delete"
    cb.onchange=addtodone;

    //tt.innerText=cb.form
    //cb.name="samename"
    ///document.body.appendChild(tt)
    //document.body.appendChild(p);
    
    p.appendChild(label)  
    p.appendChild(editbtn)   
    p.appendChild(ib)
    p.appendChild(cb)
    p.appendChild(deletebtn)
    ul.appendChild(p);
   
   let btn= document.createElement("button")
   let btn2=document.createElement("button")
   btn.innerHTML="clickme";
  //  document.body.appendChild(btn);  //here instead of body u cannot write getElementByTagName("body")

   btn2.innerHTML="newbtn";
  // document.body.appendChild(btn2); //still only one button is added in each click

   return ;
   document.write("written text")
}


