const btnCleanList = document.querySelector('.btnCleanList')
const btnAddTask = document.querySelector('.btnAddTask')

// Função para adicionar tarefas à lista no DOM
function addList() {
    const inputList = document.querySelector("#taskList");
    inputList.innerHTML = "";//Limpa o conteúdo atual da lista
    
    // Recupera a lista de tarefas do localStorage ou inicializa com uma lista vazia
    const listLocalStorage = JSON.parse(localStorage.getItem('taskList')) || [];

    // Itera sobre cada tarefa na lista e cria um elemento li para cada uma
    listLocalStorage.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task; //Define o texto do elemento criado como o valor do input atual
        inputList.appendChild(li);//Adiciona o elemento criado à lista no DOM
    });
}


// Função para adicionar um nova tarefa
function addTask() {
    const addTask = document.querySelector("input");//Captura o elemento através do input
    const newTask = addTask.value.trim();// Obtém e remove espaços em branco do início e fim do texto

    if (newTask) {
        const listLocalStorage = JSON.parse(localStorage.getItem('taskList')) || [];
        listLocalStorage.push(newTask);//Adciona a nova tarefa à lista
        localStorage.setItem('taskList', JSON.stringify(listLocalStorage));// Atualiza a lista no localStorage

        addTask.value = "";//Limpa o campo de entrada de texto
        addList(); //Atualiza a lista no DOM
    } else if (newTask != "") {
        alert("Por favor insira um interesse ou hobbie");
    }
}

// Função para limpar a lista e o localStorage
function cleanList() {
    localStorage.removeItem('taskList');
    addList();
}

btnAddTask.addEventListener('click', addTask);
btnCleanList.addEventListener('click', cleanList);

setInterval(addList, 1000)