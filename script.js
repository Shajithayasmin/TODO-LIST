var ul = document.getElementById("list-container")
var input=document.getElementById("input")

function add(){
    var listitem = document.createElement("li")
    listitem.innerHTML = input.value 
    ul.append(listitem)
    let span = document.createElement("span")
    span.innerHTML= "\u00d7"
    listitem.appendChild(span)
    input.value = ""
}
ul.addEventListener("click", function(e){
        e.target.parentElement.remove();
    
});

