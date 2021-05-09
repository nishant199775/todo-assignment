var taskInput=document.getElementById("task")
var addButton=document.getElementById("addButton")
var taskContainer=document.getElementById("task-list")
var deleteButton=document.getElementById('deleteButton')
var taskCount=document.getElementById('taskCount')
addButton.onclick=function(){
    addItem();
}
function addItem(){
    if(taskInput.value.length>0)
    {
        
    var newItem=document.createElement('li')
    var newtask=document.createElement('span')
    var deleteButton=document.createElement('button')
    

    newtask.innerHTML=taskInput.value
    newtask.setAttribute('id','newTaskName')

    var deleteIcon=document.createElement('i')
    deleteIcon.setAttribute('class','fa fa-calendar-minus-o fa-2x deleteIcon')
    deleteButton.appendChild(deleteIcon)
    deleteButton.setAttribute("onClick","deleteItem(this)")
    deleteButton.setAttribute("id","deleteButton")
    
    
    newItem.appendChild(newtask);
    newItem.appendChild(deleteButton);
    
    taskContainer.prepend(newItem)

    newItem.addEventListener('click',function(){
        newtask.classList.toggle('line-through')
    })

    taskCount.innerHTML=taskContainer.childElementCount;
    taskInput.value=""
    }
    
}
function deleteItem(e){
    var parent=e.parentNode.parentNode
    var child=e.parentNode
    
    parent.removeChild(child)

    taskCount.innerHTML=taskContainer.childElementCount;
}

taskInput.addEventListener('keypress',updateItem)
function updateItem(e)
{
    
    if(e.which==13)
    {
        addItem()
    }
}


var sort=document.getElementById('sortButton');
var delChecked=document.getElementById('deleteChecked')
sort.onclick=function(){
    var checkedItem=document.querySelectorAll('.line-through');
    for(var i=0;i<checkedItem.length;i++)
    {
        var child=checkedItem[i].parentNode
        var parent=child.parentNode
        parent.prepend(child);
        
    }
}
delChecked.onclick=function(){
    var checkedItem=document.querySelectorAll('.line-through');
   
    for(var i=0;i<checkedItem.length;i++)
    {
        let child=checkedItem[i].parentNode
        let parent=child.parentNode
        parent.removeChild(child);
        
    }
    taskCount.innerHTML=taskContainer.childElementCount;
}

