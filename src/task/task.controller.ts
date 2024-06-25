import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task') //endpoint
export class TaskController {
  constructor(private readonly taskService: TaskService) {} //instancia a TaskService para podermos usar os metodos

  @Post()
  create(@Body() task: TaskDto) {
    return this.taskService.create(task);
  }

  @Get()
  findAll(@Query() params: FindAllParameters) {
    return this.taskService.findAll(params);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.taskService.findById(id);
  }

  @Put('/:id')
  update(@Body() tasks: TaskDto) {
    return this.taskService.update(tasks);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
