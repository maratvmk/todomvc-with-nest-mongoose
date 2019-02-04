import { TaskModel } from "./task";

export class TaskService {
    
    async findAll(title?: string) {
        if (title) {
            return await TaskModel.find({title: { $regex: new RegExp(title, 'i') }}).exec();
        }
        else {
            return await TaskModel.find().exec();
        }
    }

    async create(task) {
        const t = new TaskModel(task);
        return await t.save();
    }

    async update(task) {
        let t = await TaskModel.findById(task._id);
        t.complete = task.complete;
        return await t.save();
    }

    async delete(id) {
        return await TaskModel.findByIdAndRemove(id).exec();
    }
}