import { Document } from 'mongoose';

export interface Task extends Document {
  readonly _id: number
  readonly title: string;
  complete: boolean;
}
