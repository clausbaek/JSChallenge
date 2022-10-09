const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDoArray = [];


function savetoDoArray() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}


function deleteToDo(event) {
    const litoRemove = event.target.parentElement;
    litoRemove.remove();

    toDoArray = toDoArray.filter((todo) => todo.id !== parseInt(litoRemove.id));
    savetoDoArray();
}

function ConvertDate(miliseconds)
{
const dateMili= new Date(miliseconds);
const Years = String(dateMili.getUTCFullYear()).padStart(2, "0");
const Months = String(dateMili.getUTCMonth()+1).padStart(2, "0");
const Dates = String(dateMili.getDate()).padStart(2, "0");
const Hours = String(dateMili.getHours()).padStart(2, "0");
const Minutes = String(dateMili.getMinutes()).padStart(2, "0")
let dateString =`${Years}-${Months}-${Dates} / ${Hours}:${Minutes}~`;
return dateString;
}


function paintToDo(newtodoObject) {

    const newlitag = document.createElement("li");

    newlitag.id = newtodoObject.id;

    const newspan = document.createElement("span");
    const addSpace =document.createElement("br");
    const AddInputTime = document.createElement("span");
    const Xbutton = document.createElement("button");


    newlitag.appendChild(newspan);
    newlitag.appendChild(addSpace);
    newlitag.appendChild(AddInputTime);
    newlitag.appendChild(Xbutton);

    newspan.innerText = newtodoObject.text;

    const InputDate =ConvertDate(newtodoObject.id);

    AddInputTime.innerText =`Listed at : ${InputDate}`;

    
    Xbutton.innerText = "Delete Task"
    Xbutton.addEventListener("click", deleteToDo);

    toDoList.appendChild(newlitag);


}

function handletoDoSubmit(event) {

    event.preventDefault();
    const newtoDo = toDoInput.value;

    toDoInput.value = "";

    const newtodoObject = {
        text: newtoDo,
        id: Date.now()
    };

    toDoArray.push(newtodoObject);

    savetoDoArray();

    paintToDo(newtodoObject);
}

toDoForm.addEventListener("submit", handletoDoSubmit);


const savedtodos = localStorage.getItem(TODOS_KEY);


if (savedtodos !== null) {
    const parsedtodos = JSON.parse(savedtodos);

    toDoArray = parsedtodos;
    toDoArray.forEach(paintToDo);

    parsedtodos.forEach((item) => console.log("this item is ", item));
}



