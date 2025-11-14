const app = document.getElementById('app');
updateView();

function updateView() {
    app.innerHTML = /*html*/ `
  <h1>To-do List</h1>
  <div class="center">
    <table id="tasksTable"></table>
    <div class="input-container center">
        <input id="taskDescription" type="text" placeholder="Enter Task"/>
        <input id="taskPerson" type="text" placeholder="Add Person">
        <input id="taskDeadline" type="date">
        <button class="btn-submit" onclick="addTask()">Add Task</button>
    </div>
   </div>
  `;
}

// table
let tasksTable = document.getElementById('tasksTable');
show();

function show() {
    let tableHtml = /*html*/ `
    <tr>
        <th>Person</th>
        <th>Task</th>
        <th>Deadline</th>
        <th>Done</th>
        <th></th>
        <th></th>
    </tr>`;
    for (let i = 0; i < tasks.length; i++) {
        tableHtml += createHtmlRow(i);
    }
    tasksTable.innerHTML = tableHtml;
}

// table row
function createHtmlRow(i) {
    const task = tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    if (!task.editMode)
        return /*html*/ `
        <tr>
          <td>${task.person || 'None'}</td>
            <td>${task.description || 'No Task'}</td>
            <td>${task.deadline ? new Date(task.deadline).toLocaleDateString() : 'No Deadline'}</td>
            <td>${task.isDone ? task.doneDate : 'Not Done'}</td>
            <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
            <td>
                <button onclick="deleteTask(${i})">Delete</button>
                <button onclick="editTask(${i})">Edit</button>
            </td>
        </tr>
    `;
    return /*html*/ `
        <tr>
            <td><input id="editPerson${i}" placeholder="Add Person" type="text" value="${task.person || ''}"></td>
            <td><input id="editDescription${i}" placeholder="Enter Task" type="text" value="${task.description}"/></td>
            <td><input id="editDate${i}" type="date" value="${task.deadline || 'No Deadline'}"></td>
            <td>${task.isDone ? task.doneDate : 'Not Done'}</td>
            <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
            <td>
                <button onclick="updateTask(${i})">Save</button>
            </td>
        </tr>
    `;
}

function changeIsDone(checkbox, index) {
    const task = tasks[index];
    task.isDone = checkbox.checked;
    if (checkbox.checked) {
        const today = new Date();
        task.doneDate = today.toLocaleDateString();
    } else {
        task.doneDate = 'Not Done';
    }

    show();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    show();
}

function editTask(index) {
    tasks[index].editMode = true;
    show();
}

function updateTask(index) {
    const descId = `editDescription${index}`;
    const personId = `editPerson${index}`;
    const dateId = `editDate${index}`;
    const descInput = document.getElementById(descId);
    const personInput = document.getElementById(personId);
    const deadlineInput = document.getElementById(dateId);
    const task = tasks[index];

    task.description = descInput.value;
    task.person = personInput.value;
    task.deadline = deadlineInput.value;
    task.editMode = false;

    show();
}
