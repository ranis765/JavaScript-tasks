import {render} from './render.js';
import { ListBoardComponent } from './components/tabsComponent copy.js';
import { taskComponent } from './components/tabscontent.js';


const boardElement = document.querySelector('.tabs');

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
