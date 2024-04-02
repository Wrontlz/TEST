const input1=document.querySelector(".input1")
const list_task=document.getElementById("list_as")
const soxr=document.querySelector(".soxr")

soxr.addEventListener("click", function(event){
    event.preventDefault()
    const new_task=document.createElement("li")
    new_task.textContent=input1.value 
    input1.value="Введите задачу"
    new_task.addEventListener("click", toogleStyle)
    list_task.appendChild(new_task)
})
function toogleStyle(){
    this.classList.toggle("cherk")

}
list_task.addEventListener("dblclick", remove_task)
function remove_task(event){  
    if(event.target.tagName==="LI"){
        event.target.remove()
    }
}