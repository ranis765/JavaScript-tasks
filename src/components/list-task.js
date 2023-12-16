import { AbstractComponent } from "./abstractComp.js";
export class TaskListComponent extends AbstractComponent {
  constructor({ id, title, status }) {
    super();
    this._id = id;
    this._status = status;
    this._title = title;
  }

  getTemplate() {
    return `<div class="tab-content ${this._status}">
      <p>${this._status}</p>
  </div>`
  }
}