import { Controller, Get, Post, Body, Param, Query, Delete, Patch } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { Task } from './task.interface';
import { TasksService } from './task.service';

@Controller('tasks')
export class CatsController {
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
    async findAll(@Query() query: {age: number}): Promise<Task[]> {
        return this.taskService.findAll(query.age);
    }

    @Get('search')
    async search(@Query() query): Promise<Task[]> {
        return this.taskService.searchByName(query.title);
    }

    @Get('active')
    async active(): Promise<Task[]> {
        return this.taskService.active();
    }

    @Delete(':id')
    async delete(@Param() params): Promise<Task> {
        return this.taskService.delete(params.id);
    }
}
