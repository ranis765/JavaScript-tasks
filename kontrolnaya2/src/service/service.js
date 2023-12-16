import { date } from "../mock/date.js";
export class TasksService {
  #boardTasks = date;
  getBoardTasks() {
    return this.#boardTasks;
  }
  getTasksByStatus(content) {
    return this.#boardTasks.filter((date) => date.content === content);
  }
}
