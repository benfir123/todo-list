import { popUpNewProject, popUpNewToDo } from "./render"
import { getStorage } from "./handleToDo"

export const initialLoad = () => {

    getStorage();

    const addToDoButton = document.getElementById('add-to-do')
    addToDoButton.addEventListener('click', popUpNewToDo)
    const addProjectButton = document.querySelector('#add-project-btn')
    addProjectButton.addEventListener('click', popUpNewProject)
    
}