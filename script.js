const taskContent = document.getElementById('taskContent');
let taskList = document.getElementById('myList');

function addTask() {
    let list = document.createElement('li');	
    list.innerHTML = taskContent.value;
    const deleteImage = document.createElement('img');
    const editImage = document.createElement('img');
    deleteImage.src = './logoImage/deleteImg.jpg';
    editImage.src = './logoImage/editImg.png';
    list.appendChild(editImage);
    list.appendChild(deleteImage);
    taskList.appendChild(list);
    
    taskContent.value = ' ';
}

