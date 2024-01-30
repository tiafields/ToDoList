const inputBox = document.getElementById("input-box");
const listContainter = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '') {
        alert("Please enter a task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainter.appendChild(li);
    }
    

}