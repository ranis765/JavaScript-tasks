import {createElement} from '../render.js';

function createFormAddTaskComponentTemplate() {
    return (
        `<section class="addtask-all">
        <div class="addtask">
          <h2>Новая задача</h2>
          <div class="addtask-box">
            <input type="text" placeholder="Название задачи...">
            <button>+ Добавить</button>
          </div>
        </div>
        </section>`
      );
}


export class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;

}


removeElement() {
  this.element = null;
}
}
