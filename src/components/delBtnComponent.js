import { AbstractComponent } from "../abstractComponent.js";
import { myData } from '../api.js';

export class DelBtnComponent extends AbstractComponent {
  getTemplate() {
    return `<button class="box-del__item">Очистить</button>`;
  }
}
