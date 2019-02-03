import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Task } from './task.interface';
import { TaskDto } from './task.dto';

@Injectable()
export class TasksService {
    constructor(@Inject('TaskModelToken') private readonly taskModel: Model<Task>) { }

    async create(taskDto): Promise<Task> {
        const createdTask = new this.taskModel(taskDto);
        return await createdTask.save();
    }

    async patch(taskDto): Promise<Task> {
        let task = await this.taskModel.findById(taskDto._id);
        task.complete = taskDto.complete;
        return await task.save();
    }

    async findAll(): Promise<Task[]> {
        return await this.taskModel.find().exec();
    }

    async searchByName(title: string): Promise<Task[]> {
        if (title) {
            return await this.taskModel.find({title: { $regex: new RegExp(title, 'i') }}).exec();
        }
        else {
            return this.findAll();
        }
    }

    async findOne(id: string): Promise<Task> {
        return await this.taskModel.findById(id);
    }

    async delete(id: string): Promise<Task> {
        return await this.taskModel.findByIdAndRemove(id).exec();
    }
}
