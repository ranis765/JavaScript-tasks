// appComponent.js
import { AbstractComponent } from "./abstractComponent.js";

export class AppComponent extends AbstractComponent {
  constructor({ id, content }) {
    super();
    this._id = id;
    this._content = content;
  }

  getTemplate() {
    return `<div>${this._content}</div>`;
  }
}
