import { Connection } from 'mongoose';
import { TaskSchema } from './schemas/task.schema';

export const tasksProviders = [
    {
        provide: 'TaskModelToken',
        useFactory: (connection: Connection) => connection.model('Task', TaskSchema),
        inject: ['DbConnectionToken'],
    },
];
