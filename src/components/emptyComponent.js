import { AbstractComponent } from "./abstractComp.js";

export class EmptyTasksComponent extends AbstractComponent {
  getTemplate() {
    return `<li class="empty">Перетащите карточку</li>`;
  }
}
