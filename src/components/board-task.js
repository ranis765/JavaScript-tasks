import { AbstractComponent } from "./abstractComp.js";

export class ListBoardComponent extends AbstractComponent {
  getTemplate(){
    return `<section class="board-app__list"></section>`;
  }
  
}
