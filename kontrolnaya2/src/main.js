import { render, RenderPosition } from "./render.js";
import { ContentComponent } from "./component/tab-content-Component.js";
import { TasksService } from "./service/service.js";
import { date } from "../src/mock/date.js";
import { AppComponent } from "./component/appComponent.js";

const bodyElement = document.querySelector(".app-body");
const taskService = new TasksService(date);

date.forEach((date) => {
  const boardContainer = new ContentComponent({
    id: date.id,
    title: date.title,
    content: date.content
  });

  render(boardContainer, bodyElement);
  const appComponent = new AppComponent({
    id: date.id,
    content: date.content,
  });
  render(
    appComponent,
    boardContainer.getElement().querySelector(".tab-content")
  );
  boardContainer.setHandler();
  
});


