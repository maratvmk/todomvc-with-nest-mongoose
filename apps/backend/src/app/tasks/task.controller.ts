import { Controller, Get, Post, Body, Param, Query, Delete, Patch } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { Task } from './task.interface';
import { TasksService } from './task.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

    @Post()
    async create(@Body() taskDto: TaskDto): Promise<Task> {
        return this.taskService.create(taskDto);
    }

    @Patch()
    async patch(@Body() taskDto: TaskDto): Promise<Task> {
        return this.taskService.patch(taskDto);
    }

    @Get()
    async findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get('search')
    async search(@Query() query): Promise<Task[]> {
        return this.taskService.searchByName(encodeURIComponent(query.title));
    }

    @Delete(':id')
    async delete(@Param() params): Promise<Task> {
        return this.taskService.delete(params.id);
    }
}
