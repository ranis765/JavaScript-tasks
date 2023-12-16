import { createElement } from "..//render";

function tabsComponentTemplate() {
  return (
      `<div class="tabs">
       <button class="tab-button" data-for-tab="1">Фильмы</button>
      <button class="tab-button" data-for-tab="2">Музыкальные произведения</button>
      <button class="tab-button" data-for-tab="3">Книги</button>
      <button class="tab-button" data-for-tab="4">Журналы</button>
      </div>`

    );    
}


export class TabsComponent{
getTemplate() {
  return tabsComponentTemplate();
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