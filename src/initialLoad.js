import { popUpNewProject, popUpNewToDo } from "./render";
import { getStorage } from "./handleToDo";

export const initialLoad = () => {
  getStorage();

  const addToDoButton = document.getElementById("add-to-do");
  addToDoButton.addEventListener("click", popUpNewToDo);
  const addProjectButton = document.querySelector("#add-project-btn");
  addProjectButton.addEventListener("click", popUpNewProject);
  const mobileNavButton = document.querySelector(".button-open-nav");
  const nav = document.querySelector("nav");
  if (mobileNavButton) {
    mobileNavButton.addEventListener("click", () => {
      nav.classList.toggle("height");
    });
  }
};
