const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"
const toDoArray =[];




function deleteToDo(event) {

    // console.log(event.target.parentElement.innerText);
    // will show what <li> content of event parent
    
    const litoRemove = event.target.parentElement;
    litoRemove.remove();

    console.log("li is removed", litoRemove);
    // function summary : remeove li when event was run

}
function savetoDoArray(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDoArray));
    //ex) JSON.stringify([1,2,3])  returns "[1,2,3,4]" / couteroperation is parse

    // save todoarray in local storage / in a string / because you can't save arrays in a localstorage
    // 
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
    toDoArray.push(newtoDo);
    savetoDoArray();

    // console.log(toDoForm.value);  value reset to  = ""
    paintToDo(newtoDo);
}

toDoForm.addEventListener("submit", handletoDoSubmit);


// const savedtodos =localStorage.getItem(TODOS_KEY);
// function sayItemType(item) {
//     console.log("This item is ", item)

// }  * if arrow function is not used

if (savedtodos!==null){
    const parsedtodos =JSON.parse(savedtodos);
    // parsedtodos.forEach(sayItemType);
    // foreach element run sayItemType function
    //  instead use arrow function for short(instead of function) :
    
    parsedtodos.foreach(item) => console.log("this item is ", item);

    };
