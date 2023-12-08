import { HeaderComponent } from './components/header-component.js';
import { render, RenderPosition } from './render.js';
import { FormAddTaskComponent } from './components/form-add-task-component.js';
import { ListBoardComponent} from './components/board-task.js';
import { TaskListComponent } from './components/list-task.js';
import { TaskComponent } from './components/tasks.js';
import { TasksService } from './service/TaskService.js';
import { Constanats } from "./const.js";
import { EmptyTasksComponent } from "./components/emptyComponent.js";
import { DelBtnComponent } from "./components/delbuttonComponent.js";
const bodyElement = document.querySelector(".board-app");
const addTaskElement = document.querySelector(".addtask-app");

render(new HeaderComponent(), bodyElement, RenderPosition.BEFOREBEGIN);

const formAddTaskComponent = new FormAddTaskComponent();
render(formAddTaskComponent, addTaskElement);

formAddTaskComponent.setAddTaskHandler((taskTitle) => {
  const newTask = { title: taskTitle };
  taskService.create(newTask);
  refreshTaskBoard();
});
function refreshTaskBoard() {
  taskBoardContainer.getElement().innerHTML = "";
  renderTaskBoard(taskService, taskBoardContainer);
}
const taskBoardContainer = new ListBoardComponent();
render(taskBoardContainer, addTaskElement);

const taskService = new TasksService();

renderTaskBoard(taskService, taskBoardContainer);

function renderTaskBoard(taskService, container) {
  Object.values(Constanats.Status).forEach((status, i) => {
    const tasksByStatus = taskService.getTasksByStatus(status);

    const taskListComponent = new TaskListComponent({ status });
    render(taskListComponent, container.getElement());

    const statusLabel = Object.values(Constanats.StatusLabel)[i];
    const taskListElement = taskListComponent.getElement().querySelector("h2");
    taskListElement.textContent = statusLabel;

    if (tasksByStatus.length) {
      renderTaskList(tasksByStatus, taskListComponent);
    } else {
      const emptyComponent = new EmptyTasksComponent();
      const taskListContainer = taskListComponent.getElement();
      render(emptyComponent, taskListContainer);
    }

    if (Constanats.Status.DEL == status) {
      const isEmpty =
        tasksByStatus.filter((p) => p.status == Constanats.Status.DEL)
          .length === 0;
      const delBtnComponent = new DelBtnComponent(taskService);

      if (!isEmpty) {
        render(
          delBtnComponent,
          taskListComponent.getElement().querySelector("ul")
        );

        document
          .querySelector(".box-del__item")
          .addEventListener("click", (e) => {
            e.target.parentElement.querySelectorAll("li").forEach((li) => {
              li.remove();
            });

            e.target.parentElement.querySelector(".box-del__item").remove();

            const emptyComponent = new EmptyTasksComponent();

            render(
              emptyComponent,
              taskListComponent.getElement().querySelector("ul")
            );
            render(
              delBtnComponent,
              taskListComponent.getElement().querySelector("ul")
            );

            e.classList.add("disabled");
          });
      }
    }
  });
}

function renderTaskList(tasks, taskListComponent) {
  tasks.forEach((task) => {
    const taskListContainer = taskListComponent
      .getElement()
      .querySelector("ul");
    renderTask(task, taskListContainer);
  });
}

function renderTask(task, container) {
  const taskComponent = new TaskComponent(task);
  render(taskComponent, container);
}
