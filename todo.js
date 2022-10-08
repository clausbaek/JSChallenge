const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");


function deleteToDo(event) {

    // console.log(event.target.parentElement.innerText);
    // will show what <li> content of event parent
    
    const litoRemove = event.target.parentElement;
    litoRemove.remove();

    console.log("li is removed", litoRemove);
    // function summary : remeove li when event was run

}

function paintToDo(newtoDo) {
    // console.log(newtoDo) newtoDO = some value in todoInput
    const newlitag = document.createElement("li");
    // const newspan1 = newlitag.createElement("span");
    // console.log(newspan1);
    //  this code is invalid 

    const newspan = document.createElement("span");
    const Xbutton = document.createElement("button");

    newlitag.appendChild(newspan);
    newlitag.appendChild(Xbutton);

    newspan.innerText = newtoDo;
    Xbutton.innerText = "❌"
    Xbutton.addEventListener("click", deleteToDo);


    // console.log(newlitag,"newlitag");

    toDoList.appendChild(newlitag);
    //  summary of the function =
    //  add newltag <li><span> value<button></button> </span></li> in newtoDo input
    // and add eventlistner to  button

}

function handletoDoSubmit(event) {

    event.preventDefault();
    const newtoDo = toDoInput.value;
    // console.log(toDoInput.value)  some event value
    toDoInput.value = "";
    // console.log(toDoForm.value);  value reset to  = ""
    paintToDo(newtoDo);
}

toDoForm.addEventListener("submit", handletoDoSubmit);
