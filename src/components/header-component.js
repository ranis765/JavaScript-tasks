import { AbstractComponent } from "./abstractComp.js";

export class HeaderComponent extends AbstractComponent {
  getTemplate() {
    return `<header class="header container">
              <h1>Список задач</h1>
            </header>`;
  }
}
