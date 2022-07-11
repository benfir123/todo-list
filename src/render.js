import { todos, createNewToDo, createNewProject, removeTodo, projects } from "./handleToDo";

const todoCard = document.createElement('article');
const todoTitleField = document.createElement('input');
const todoDescription = document.createElement('textarea');
const todoDueDate = document.createElement('input');
const todoPriority = document.createElement('input');
const dateContainer = document.createElement('div');
const modal = document.createElement('div')
const toDoListContainer = document.getElementById('todo-list');
const nav = document.querySelector('nav');
const dataList = document.createElement('datalist')
const option1 = document.createElement('option')
const option2 = document.createElement('option')
const option3 = document.createElement('option')
modal.setAttribute('id', 'myModal')
modal.classList.add('modal')

let todoReady = false;
let projectReady = false;
let selectedProject = 'Inbox';

const projectCard = document.createElement('article');
const projectTitleField = document.createElement('input');

(function() {
  const inboxButton = document.querySelector('#inbox-tab')
  inboxButton.addEventListener('click', () => {
      selectedProject = 'Inbox'
      render();
  })
})();

export const render = () => {
    

    const currentTab = document.querySelector('#current-tab')
    currentTab.textContent = selectedProject

    if (toDoListContainer.contains(todoCard)) toDoListContainer.removeChild(todoCard);
    const currentToDoList = document.querySelectorAll('.todo')
    currentToDoList.forEach(node => toDoListContainer.removeChild(node))

    todos.slice().reverse().forEach(todo => {

        if (todo.project === selectedProject) {

        const todoBar = document.createElement('div')
        const todoTitle = document.createElement('span')
        const todoCircle = document.createElement('i')
        const todoRemove = document.createElement('i')
        todoRemove.classList.add('fa-solid')
        todoRemove.classList.add('fa-xmark')
        todoCircle.classList.add('fa-regular')
        todoCircle.classList.add('fa-square')
        todoBar.classList.add('todo')

        todoTitle.textContent = todo.title;
        todoBar.appendChild(todoCircle)
        todoBar.appendChild(todoTitle)
        todoBar.appendChild(todoRemove)
        todoRemove.addEventListener('click', removeTodo)
        toDoListContainer.appendChild(todoBar);

        }

    })

    if (nav.contains(projectCard)) nav.removeChild(projectCard)
    const currentProjectList = document.querySelectorAll('.project')
    currentProjectList.forEach(node => nav.removeChild(node))

    projects.forEach(project => {
        const projectBar = document.createElement('div')
        projectBar.classList.add('filter-tab')
        const projectTitle = document.createElement('p')
        const projectIcon = document.createElement('i')
        projectIcon.classList.add('fa-solid')
        projectIcon.classList.add('fa-file')
        projectTitle.textContent = project.title
        projectBar.appendChild(projectIcon)
        projectBar.appendChild(projectTitle)
        projectBar.classList.add('project')
        projectBar.addEventListener(
          'click', (e) => {
            selectedProject = e.target.textContent
            render();
          }
          
          )
        nav.insertBefore(projectBar, nav.children[5])
    })
    

}

export const popUpNewToDo = () => {
    

    todoCard.classList.add('todo-card')
    todoTitleField.classList.add('todo-title');
    todoTitleField.setAttribute('id', 'todo-title')
    todoTitleField.setAttribute('placeholder', 'New To-Do')
    todoDescription.classList.add('todo-descr')
    todoDescription.setAttribute('placeholder', 'Notes')
    todoDescription.setAttribute('id', 'todo-descr')
    todoDueDate.classList.add('todo-date')
    todoDueDate.setAttribute("type", "date")
    todoDueDate.setAttribute('id', 'todo-date')
    todoPriority.classList.add('todo-priority')
    todoPriority.setAttribute('type', 'color')
    todoPriority.setAttribute('list', 'presetColors')
    todoPriority.setAttribute('id', 'todo-priority')
    dateContainer.classList.add('date-container')
    option1.textContent = '#ff0000'
    option2.textContent = '#00ff00'
    option3.textContent = '#0000ff'
    dataList.appendChild(option1)
    dataList.appendChild(option2)
    dataList.appendChild(option3)
    todoPriority.appendChild(dataList)
    dataList.setAttribute('id', 'presetColors')
    todoCard.appendChild(todoTitleField)
    todoCard.appendChild(todoDescription)
    dateContainer.appendChild(todoDueDate)
    dateContainer.appendChild(todoPriority)
    todoCard.appendChild(dateContainer)
    document.body.appendChild(modal)
    toDoListContainer.insertBefore(todoCard, toDoListContainer.firstChild.nextSibling.nextSibling);
    todoTitleField.focus();
    modal.style.display = 'block';
    todoReady = true;
    window.onclick = function(event) {
        if (event.target == modal && todoReady) {
          modal.style.display = "none";
          createNewToDo();
          todoTitleField.value = '';
          todoDescription.value = '';
          todoDueDate.value = '';
          todoPriority.value = '';
          todoReady = false;
        }
        
      }
}

export const popUpNewProject = () => {
  projectCard.classList.add('project-card')
  projectTitleField.classList.add('project-title')
  projectCard.appendChild(projectTitleField)
  nav.insertBefore(projectCard, nav.lastChild.previousSibling);
  
  modal.style.display = 'block';
  document.body.appendChild(modal)
  projectReady = true;
  projectTitleField.setAttribute('placeholder', 'New Project')
  projectTitleField.focus();
  window.onclick = function(event) {
    if (event.target == modal && projectReady) {
      modal.style.display = "none";
      createNewProject();
      projectTitleField.value = '';
      projectReady = false;
    }
    
  }
  
}

export {todoTitleField, todoDescription, todoDueDate, todoPriority, projectTitleField, selectedProject};