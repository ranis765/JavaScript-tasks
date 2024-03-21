// questionComponent.js
import { AbstractComponent } from "./abstractComponent.js";

export class ContentComponent extends AbstractComponent {
  constructor({ id, title }) {
    super();
    this._id = id;
    this._title = title;
  }

  renderAppComponent(appComponent) {
    const contentContainer =
      this.getElement().querySelector(".tab-content");
    const appComponentInstance = new appComponent();
    render(appComponentInstance, contentContainer);
  }

  getTemplate() {
    return`
        <div class="tabs">
        <button class="tab-button" data-for-tab="1">${this._title}</button>
          <div class="tab-content" data-tab="1">
        </div>    
      </div>
    `;
  }
  setHandler() {
    const accordion = this.getElement();
    accordion.addEventListener("click", (event) => {
      if (event.target.classList.contains("tab-button")) {
        const content = accordion.querySelector(".tab-content");
        
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      }
    });
  }
}

