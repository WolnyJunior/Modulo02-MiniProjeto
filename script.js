document.addEventListener('DOMContentLoaded', () => {
    const btnAddNewTask = document.getElementById('btnAddtask')
    const taskList = document.getElementById('taskList')
    const inputTask = document.getElementById('inputTask')
    const btnCleanList = document.getElementById('cleanList')
    inputTask.addEventListener('focus', () => {
        inputTask.classList.add('input-focus')
        inputTask.style = 'border: 3px solid #000; text-align: center'
        inputTask.placeholder = 'Adicione um interesse.'
    })

    inputTask.addEventListener('blur', () => {
        inputTask.classList.remove('input-focus')
        if (inputTask.value === '') {
            inputTask.style = 'background: #ee9090; border: 3px solid red; text-align: center'
            inputTask.placeholder = 'Preencha este campo.'
        } else {
            inputTask.style = 'background: #0effe0; border: 3px solid green'
        }
    })

    btnAddNewTask.addEventListener('click', () => {
        const newTask = inputTask.value.trim()
        if (newTask !== '') {
            addNewTask(newTask)
            inputTask.value = ''
            inputTask.placeholder = 'Adicione mais interesses.'
        }
    })

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-button')) {
            event.target.parentElement.remove()
        }
    })

    btnCleanList.addEventListener('click', ()=>{

    })


    function addNewTask(task) {
        const li = document.createElement('li')
        li.textContent = task

        btnCleanList.style.display = 'block'

        const btnDelete = document.createElement('button')
        btnDelete.textContent = 'X'
        btnDelete.className = 'close-button'

        li.appendChild(btnDelete)
        taskList.appendChild(li)
    }
})