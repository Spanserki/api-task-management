import { Injectable, NotFoundException } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];

  create(tasks: TaskDto) {
    this.tasks.push(tasks);
    return tasks;
  }

  findAll(params: FindAllParameters) {
    const foundTask = this.tasks.filter(
      (t) => t.title.includes(params.title) || t.status.includes(params.status),
    );
    if (foundTask.length) return foundTask;
    return this.tasks;
  }

  findById(id: string): TaskDto {
    const foundTask = this.tasks.filter((t) => t.id === id);
    if (foundTask.length) return foundTask[0];
    throw new NotFoundException(`O ID: ${id} não foi encontrado!`);
  }

  update(tasks: TaskDto) {
    const foundTask = this.tasks.filter((t) => t.id === tasks.id);
    if (foundTask.length) {
      const index = foundTask.findIndex((f) => f.id === tasks.id);
      this.tasks[index] = tasks;
      return this.tasks;
    }
    throw new NotFoundException(
      `Ocorreu um erro ao tentar atualizar o registro`,
    );
  }

  delete(id: string) {
    const foundTask = this.tasks.filter((t) => t.id === id);
    if (foundTask.length) {
      const index = foundTask.findIndex((f) => f.id === id);
      this.tasks.splice(index, 1);
      return this.tasks;
    }
    throw new NotFoundException(`O ID: ${id} não foi encontrado!`);
  }
}
