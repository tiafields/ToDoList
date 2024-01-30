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
}
/* Processing task by hitting the Enter Button on the Keyboard */
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});