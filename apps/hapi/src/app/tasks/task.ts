import { Document, Model } from 'mongoose';
import mongoose from '../database/connection';
import { TaskSchema } from './task.schema';

export interface Task extends Document {
  readonly _id: number
  readonly title: string;
  complete: boolean;
}

export const TaskModel: Model<Task> = mongoose.model('Task', TaskSchema);