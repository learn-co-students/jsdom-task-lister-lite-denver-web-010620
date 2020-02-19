const createTaskForm = document.querySelector('#create-task-form')
const taskList = document.querySelector('#tasks')

document.addEventListener("DOMContentLoaded", () => {
  // your code here
    createTaskForm.addEventListener('submit', event => {
        event.preventDefault()
        const formData = new FormData(createTaskForm)
        const taskText = formData.get('new-task-description')

        let task = document.createElement('li')
        task.textContent = taskText
        taskList.appendChild(task)

        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        task.appendChild(deleteButton)
        deleteButton.addEventListener('click', event => {
          event.target.parentNode.remove()
        })
    })
});
