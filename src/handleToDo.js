import { todoTitleField, todoDescription, todoDueDate, todoPriority, projectTitleField, render, selectedProject } from "./render";
import { populateStorage } from "./storage";

let projects = [];
let todos = [];

export function getStorage () {
    if(localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem("todos"));
        projects = JSON.parse(localStorage.getItem("projects"));
        render();
      }
}

class Todo {
    constructor(title, descr, dueDate, priority, project) {
        this.title = title;
        this.descr = descr;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
}

class Project {
    constructor(title) {
        this.title = title;
    }
}

export const createNewToDo = () => {
    const todo = new Todo(
        todoTitleField.value,
        todoDescription.value,
        todoDueDate.value,
        todoPriority.value,
        selectedProject
    )
    todos.push(todo);
    populateStorage(todos, projects);
    console.log(todos)
    render();
}

export const createNewProject = () => {
    const project = new Project(
        projectTitleField.value
    )
    projects.push(project)
    populateStorage(todos, projects);
    console.log(projects)
    render();
}

export const removeTodo = (e) => {
    const todoTitle = e.target.parentElement.textContent
    todos.forEach((todo, i) => {
        if (todo.title === todoTitle) {
            todos.splice(i, 1);
        }
    })
    populateStorage(todos, projects);
    render();
    console.log(todos)
}

export const removeProject = () => {

}

export { todos, projects };