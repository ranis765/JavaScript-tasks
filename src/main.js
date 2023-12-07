import { HeaderComponent } from './components/header-component.js';
import { FormAddTaskComponent } from './components/form-add-task-component.js';
import {ListBoardComponent} from './components/board-task.js'
import { render, RenderPosition } from './render.js';
import { taskComponent } from './components/list-task.js';



const bodyElement = document.querySelector('.board-app');
const formContainer = document.querySelector('.addtask-all');
const boardElement = document.querySelector('.board-app__list');


render(new HeaderComponent(), bodyElement, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);

function createList() {
  for (let i = 0; i < 4; i++) {
    const listBoardComponent = new ListBoardComponent();
    render(listBoardComponent, boardElement);
    for (let j = 0; j < 3; j++) {
      const taskElement = new taskComponent();
      render(taskElement, listBoardComponent.getElement());
    }
  }
}

createList();