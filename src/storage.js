export function populateStorage (todos, projects) {
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('projects', JSON.stringify(projects))
}