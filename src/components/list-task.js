
import { createElement } from "../render.js";
function createTaskComponentTemplate() {
  return `<ul class="box-backlog__item ">
              <li>Название первой задачи</li>
          </ul>`;
}

export class taskComponent {
  getTemplate() {
    return createTaskComponentTemplate();
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

