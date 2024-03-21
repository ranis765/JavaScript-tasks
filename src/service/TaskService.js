
import { Constanats } from "../const.js";

import { myData } from '../api.js';


 // Ваши данные
export class TasksService {

  
  #boardTasks = myData;

  getBoardTasks() {
    return this.#boardTasks;
    
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter((data) => data.status === status);
  }
  create(task) {
    
    task.status = Constanats.Status.BACKLOG;
    this.#boardTasks.push(task);
  }
}
