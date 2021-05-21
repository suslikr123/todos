const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    list = document.querySelector('.js-list');

const todos_LS = 'todos';
let todos = [];

function loadToDos() {
    const load_todos = localStorage.getItem(todos_LS);
    if (load_todos !== null) {
        const parsedToDos = JSON.parse(load_todos);
        parsedToDos.forEach(function (toDo) {
            showToDos(toDo.name);
        });
    }
}


function saveToDos() {
    localStorage.setItem(todos_LS, JSON.stringify(todos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    list.removeChild(li);
    const cleanToDos = todos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    todos = cleanToDos;
    saveToDos();
}

function showToDos(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');

    delBtn.innerHTML = '❌';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    list.appendChild(li);

    span.classList.add('spann');
    delBtn.classList.add('delbtn');

    newId = todos.length + 1;
    li.id = newId;


    const todoObject = {
        name: text,
        id: newId
    }
    todos.push(todoObject);
    saveToDos();
}

function submitHandler(event) {
    event.preventDefault();
    const currValue = input.value;
    showToDos(currValue);
    input.value = '';
}

function init() {
    loadToDos();
    form.addEventListener('submit', submitHandler);
}

init();
