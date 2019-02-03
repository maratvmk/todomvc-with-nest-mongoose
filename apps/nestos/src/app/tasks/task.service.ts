import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Task } from './task.interface';
import { TaskDto } from './task.dto';

@Injectable()
export class TasksService {
    constructor(@Inject('TaskModelToken') private readonly taskModel: Model<Task>) { }

    async create(taskDto): Promise<Task> {
        const createdCat = new this.taskModel(taskDto);
        return await createdCat.save();
    }

    async patch(taskDto): Promise<Task> {
        let task = await this.taskModel.findById(taskDto._id);
        task.complete = taskDto.complete;
        return await task.save();
    }

    async findAll(age?: number): Promise<Task[]> {
        if (age >= 0) {
            return await this.taskModel.find({age: {$gte: age}}).exec();
        }
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

    async active(): Promise<Task[]> {
        return await this.taskModel.find({complete: false}).exec();
    }

    async findOne(id: string): Promise<Task> {
        return await this.taskModel.findById(id);
    }

    async delete(id: string): Promise<Task> {
        return await this.taskModel.findByIdAndRemove(id).exec();
    }
}
