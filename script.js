const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list_container")

function addTask()
{
    if(inputBox.value==='')
    {
        alert("Stop Procrastinating and Quickly Added Your Tasks!");
    }
    else
    {
        let li=document.createElement("li");;
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "&#10060;";
        li.appendChild(span)
    }
    inputBox.value="";
    saveData()
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }

    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }

},false);

function saveData ()

{
    localStorage.setItem("data",listContainer.innerHTML)
}

function DisplayList ()
{
    listContainer.innerHTML=localStorage.getItem("data")
}
DisplayList ()