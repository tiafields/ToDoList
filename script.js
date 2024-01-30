const inputBox = document.getElementById("input-box");
const listContainter = document.getElementById("list-container");

/* Function for Adding Task */
function addTask(){
    if(inputBox.value === '') {
        alert("Please enter a task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainter.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}
/* Processing task by hitting the Enter Button on the Keyboard */
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
        savaData();
    }
});
/*Function for marking task on or off the list */
listContainter.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
/* Saving Data  */
function saveData(){
    localStorage.setItem("data", listContainter.innerHTML);
}
/* Displaying data when opening broswer*/
function showTask(){
    listContainter.innerHTML = localStorage.getItem("data");
}
showTask();