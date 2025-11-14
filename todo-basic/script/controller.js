let taskDescriptionInput = document.getElementById('taskDescription');
let taskPersonInput = document.getElementById('taskPerson');
let taskDeadlineInput = document.getElementById('taskDeadline');

function addTask() {
    tasks.push({
        description: taskDescriptionInput.value,
        isDone: false,
        person: taskPersonInput.value || '',
        deadline: taskDeadlineInput.value,
        doneDate: 'Not Done',
    });
    taskDescriptionInput.value = '';
    taskPersonInput.value = '';
    taskDeadlineInput.value = '';
    show();
}

