import mongoose from '../database/connection';

export const TaskSchema = new mongoose.Schema({
    title: String,
    complete: Boolean,
});